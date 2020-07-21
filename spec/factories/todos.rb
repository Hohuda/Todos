FactoryBot.define do
  factory :todo do
    title { FFaker::Hipster.sentence(3) }
    description { FFaker::Hipster.paragraph(5) }
    association :category
  end
end
