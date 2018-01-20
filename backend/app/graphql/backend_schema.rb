BackendSchema = GraphQL::Schema.define do
  mutation(Mutations::MutationType)
  query(Types::QueryType)
end
