import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);

    expect(createdPost.id).toBeDefined();
    expect(createdPost.text).toBe(post.text);
    expect(createdPost.date).toBeDefined();

    const foundPost = postsService.find(createdPost.id);
    expect(foundPost).toBe(createdPost);

  });

  it('should find a post', () => {
    const createdPost = postsService.create(post);
    const foundPost = postsService.find(createdPost.id);
    expect(foundPost).toBe(createdPost);
  });
});

