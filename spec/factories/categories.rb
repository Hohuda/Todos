FactoryBot.define do
  factory :category do
    name { FFaker::Hipster.sentence(3) }
  end
end
