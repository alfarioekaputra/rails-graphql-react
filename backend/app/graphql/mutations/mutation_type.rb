Mutations::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createPost, Types::PostType do
    description 'allow you to create a new blog post'

    argument :title, !types.String
    argument :body, !types.String

    resolve ->(obj, args, ctx) {
      post = Post.new(args.to_h)

      post.save

      post
    }
  end

  field :editPost, Types::PostType do
    description 'allow you to edit a blog post'

    argument :id, !types.ID
    argument :title, !types.String
    argument :body, !types.String

    resolve ->(obj, args, ctx){
      post = Post.find(args.id)
      post.update(title: args.title, body: args.body)

      post
    }
  end
end
