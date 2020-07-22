4.times do
  Category.create(name: FFaker::HipsterIpsum.sentence(1))
end

Category.find_each do |category|
  Random.rand(1..5).times do
    category.todos.create(
      title: FFaker::HipsterIpsum.sentence(1),
      description: FFaker::HipsterIpsum.paragraph(3),
      done: [true, false].sample
    )
  end
end
