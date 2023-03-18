# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Cohort.destroy_all
Workbook.destroy_all
User.destroy_all
Commit.destroy_all
Exercise.destroy_all
Motivation.destroy_all
Reflection.destroy_all


puts "Seeding cohorts..."
Cohort.create(date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short))
Cohort.create(date_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short))

#workbook
puts "Seeding workbook..."
(1..30).each do |num| 
    Workbook.create(
    week: 1
 )
end

#week
puts "Seeding week..."
    Week.create(date_time: Faker::Time.between(from: DateTime.now - 1,to: DateTime.now, format: :short), week: 1)

puts "Seeding users..."
User.create(
    name: Faker::FunnyName.two_word_name, 
    seniority: 4, 
    email: "pp@girlyswirly.com", 
    direct_reports: 2, 
    username: "princesspolly", 
    password: "Password123!", 
    bio: Faker::Marketing.buzzwords, 
    location_zip: 90210, 
    location_name: "Beverly Hills", 
    company: "Doggles",
    logo: Faker::Company.logo, 
    photo: "/images/2.svg", 
    workbook_id: Workbook.all.sample.id, 
    cohort_id: Cohort.all.sample.id, 
    role:1, 
    manager_email:Faker::Internet.email, 
    dr_email:Faker::Internet.email
)

User.create(name: Faker::FunnyName.two_word_name, seniority: 2, email: "gmcgill@gmail.com", direct_reports: 2, username: "guads_quads", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 87501, location_name: "Santa Fe", company: "Gustoe",logo: Faker::Company.logo, photo: "/images/3.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 2, email: "sexychad@sports.com", direct_reports: 5, username: "chadtastic", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 16831, location_name: "Greenwich", company: "Zip Recuiter", logo: Faker::Company.logo,photo: "/images/4.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 3, email: "shaquil_oatmeal@yahoo.com", direct_reports: 3, username: "shaquil_oatmeal", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 89113, location_name: "Las Vegas", company: "ZenPayroll", logo: Faker::Company.logo,photo: "/images/5.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 2, email: "moonchild19@gmail.com", direct_reports: 7, username: "mysticmama", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 86336, location_name: "Sedona", company: "30 Rock", logo: Faker::Company.logo,photo: "/images/6.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 2, email: "bendover@gmail.com", direct_reports: 1, username: "bdoverrr", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 86336, location_name: "Sedona", company: "GreenZo", logo: Faker::Company.logo,photo: "/images/7.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 3, email: "icespice@capitolrecords.com", direct_reports: 3, username: "icespice", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 10474, location_name: "New York", company: "TGS", logo: Faker::Company.logo, photo: "/images/8.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 5, email: "dschrute@dundermifflin.com",direct_reports: 3, username: "beetluvr", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 18503, location_name: "Scranton", company: "Initech", logo: Faker::Company.logo, photo: "/images/9.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Caleigh Steill", seniority: 3, email: "caleighsteill@gmail.com", direct_reports: 3, username: "cmoneysbigmoves", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 10012, location_name: "New York", company: "Initech", logo: Faker::Company.logo, photo: "/images/10.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Rebecca Wollard", seniority: 3, email: "rebeccawollard@gmail.com", direct_reports: 4, username: "rbeedub", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 80014, location_name: "Denver", company: "Initech", logo: Faker::Company.logo, photo: "/images/11.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Matt Ishida", seniority: 4,  email: "mattishida@gmail.com", direct_reports: 9, username: "mattishida", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 96813, location_name: "Honolulu", company: "SkyNet", logo: Faker::Company.logo, photo: "/images/12.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Jensen Miers", seniority: 3,  email: "jmiers@gmail.com", direct_reports: 6, username: "jensenorita", password: "Password123!", bio:Faker::Marketing.buzzwords, location_zip: 90045, location_name: "Los Angeles", company: "CyberDyne", logo: Faker::Company.logo, photo: "/images/13.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Walker Le", seniority: 2, email: "wlee@flatearthsociety.com", direct_reports: 3, username: "earth_is_flat", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 80014, location_name: "Denver", company: "Stratton Oakmont", logo: Faker::Company.logo, photo: "/images/14.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Ben Murchie", seniority: 2 , email: "benmurchie@gmail.com", direct_reports: 7, username: "beanswtf", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 98901, location_name: "Yakima", company: "Initech", logo: Faker::Company.logo, photo: "/images/15.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Austin Schaffer", seniority: 2, email: "aschaffer@gmail.com",  direct_reports: 8, username: "itsyaboi", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 35005, location_name: "Birmingham", company: "CyberDyne", logo: Faker::Company.logo, photo: "/images/16.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Ryan Horn", seniority: 2, email: "rhorn@gmail.com", direct_reports: 3, username: "rhorn", password: "Password123!", bio:Faker::Marketing.buzzwords, location_zip: 80014, location_name: "Denver", company: "SkyNet", logo: Faker::Company.logo, photo: "/images/17.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Jaz Singh", seniority: 3, email: "jsingh@gmail.com", direct_reports: 3, username: "smooth_jaz", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 95660, location_name: "Sacramento", company: "Rippling", logo: Faker::Company.logo, photo: "/images/18.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Surapat Mekvanich", seniority: 3, email: "surapatmek@gmail.com", direct_reports: 6, username: "surmek", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 98901, location_name: "Yakima", company: "Rippling", logo: Faker::Company.logo, photo: "/images/19.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Colm Traci", seniority: 3, email: "ctraci@gmail.com", direct_reports: 4, username: "keep_colm", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 94106, location_name: "San Francisco", company: "CornerStone Inc.", logo: Faker::Company.logo, photo: "/images/20.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Lantz Warrick", seniority: 3, email: "ctraci@flatironschool.com", direct_reports: 5, username: "betalantz", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 94106, location_name: "Seattle", company: "Magoo Tech Co.", logo: Faker::Company.logo, photo: "/images/21.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 3, email: "chris@elevow.com", direct_reports: 5, username: "chrees", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 98101, location_name: "Seattle", logo: Faker::Company.logo, photo: "/images/22.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Sam Chappell", seniority: 3, email: "schappel@gmail.com", direct_reports: 6, username: "packdaddy", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 98045, location_name: "Bend", company: "WakaWaka", logo: Faker::Company.logo, photo: "/images/23.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Javonn Williams", seniority: 3, email: "jwilliams@gmail.com", direct_reports: 6, username: "gymgod73", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 94501, location_name: "Oakland", logo: Faker::Company.logo, photo: "/images/24.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: "Topher Ludlow", seniority: 3, email: "topher@gmail.com", direct_reports: 6, username: "tophdoggy", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 95631, location_name: "Foresthill", company: "MicroNano", logo: Faker::Company.logo, photo: "/images/25.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 3, email: "lermnamba@gmail.com", direct_reports: 5, username: "lerm_the_werm", password: "Password123!", bio: Faker::Marketing.buzzwords, company: "Initech", location_zip: 90045, location_name: "Los Angeles", logo: Faker::Company.logo,photo: "/images/26.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 2, email: "meels@gmail.com", direct_reports: 5, username: "meelzzz", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 90283, location_name: "Playa Del Rey", logo: Faker::Company.logo, photo: "/images/27.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 2, email: "anitamann@gmail.com", direct_reports: 8, username: "anitamann", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 10017, location_name: "New York", logo: Faker::Company.logo, photo: "/images/31.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 2, email: "tjones@jonesbbqnfootmassage.com", direct_reports: 8, username: "bbqking", password: "Password123!", bio:Faker::Marketing.buzzwords, location_zip: 60007, location_name: "Chicago", company: "Initech", logo: Faker::Company.logo, photo: "/images/28.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 3, email: "creed@dundermifflin.com", direct_reports: 6, username: "assassins_creed", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 18503, location_name: "Scranton", company: "Initech", logo: Faker::Company.logo, photo: "/images/29.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)
User.create(name: Faker::FunnyName.two_word_name, seniority: 3, email: "micah@gmail.com", direct_reports: 1, username: "wahpow", password: "Password123!", bio: Faker::Marketing.buzzwords, location_zip: 90742, location_name: "Huntington Beach", company: "Initech", logo: Faker::Company.logo, photo: "/images/30.svg", cohort_id: Cohort.all.sample.id, workbook_id: Workbook.all.sample.id, role:1, manager_email:Faker::Internet.email, dr_email:Faker::Internet.email)




# #motivationmap
puts "Seeding motivation map..."
User.all.each do |u|
    Motivation.create(
        personal_values1:Faker::Quote.famous_last_words,
        personal_values2:Faker::Quote.famous_last_words,
        personal_values3:Faker::Movies::Lebowski.quote,
        personal_values4:Faker::Movies::PrincessBride.quote,
        personal_values5:Faker::Movies::VForVendetta.quote,
        energized_by1:Faker::Emotion.noun,
        energized_by2:Faker::Emotion.noun,
        energized_by3:Faker::Emotion.noun,
        energized_by4:Faker::Emotion.noun,
        energized_by5:Faker::Emotion.noun,
        drained_by1:Faker::Emotion.noun,
        drained_by2:Faker::Emotion.noun,
        drained_by3:Faker::Emotion.noun,
        drained_by4:Faker::Emotion.noun,
        drained_by5:Faker::Emotion.noun,
        context:Faker::GreekPhilosophers.quote,
        motivations1:Faker::Company.bs,
        motivations2:Faker::Company.bs,
        motivations3:Faker::Company.bs,
        motivations4:Faker::Company.bs,
        motivations5:Faker::Company.bs,
        workbook_id: Workbook.all.sample.id,
        week: Week.all.sample.id 
    )
end

# #motivationexercise
puts "Seeding motivation exercise..."
User.all.each do |u|
    Exercise.create(
        importance: Faker::Number.between(from: 1, to: 10),
        status:Faker::Number.between(from: 1, to: 10),
        my_thoughts:Faker::GreekPhilosophers.quote,
        next_steps: Faker::Lorem.paragraph(sentence_count: 2),
        workbook_id: Workbook.all.sample.id,
    )
end

# #quickcommit
puts "Seeding quick commits...."
User.all.each do |u|
    Commit.create(
        quick_commit1: Faker::GreekPhilosophers.quote,
        quick_commit2: Faker::GreekPhilosophers.quote,
        workbook_id: Workbook.all.sample.id,
        week: Week.all.sample.id 
    )
end

# #quickcommit
puts "Seeding reflection...."
User.all.each do |u|
    Reflection.create(
        notes: Faker::Lorem.paragraph(sentence_count: 1),
        workbook_id: Workbook.all.sample.id,
        week: Week.all.sample.id 
    )
end

# #quickcommit
puts "Seeding stakeholders...."
User.all.each do |u|
    Stakeholder.create(
        q1: Faker::Lorem.paragraph(sentence_count: 1),
        q2: Faker::Lorem.paragraph(sentence_count: 1),
        q3: Faker::Lorem.paragraph(sentence_count: 1),
        q4: Faker::Lorem.paragraph(sentence_count: 1),
        q5: Faker::Lorem.paragraph(sentence_count: 1),
        q6: Faker::Lorem.paragraph(sentence_count: 1),
        workbook_id: Workbook.all.sample.id,
        week: Week.all.sample.id 
    )
end