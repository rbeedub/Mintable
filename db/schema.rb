# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_21_211200) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cohorts", force: :cascade do |t|
    t.integer "date_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "commits", force: :cascade do |t|
    t.text "quick_commit1"
    t.text "quick_commit2"
    t.bigint "week_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["week_id"], name: "index_commits_on_week_id"
  end

  create_table "exercises", force: :cascade do |t|
    t.integer "importance"
    t.integer "status"
    t.text "my_thoughts"
    t.text "next_steps"
    t.bigint "week_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "status2"
    t.integer "status3"
    t.integer "status4"
    t.integer "status5"
    t.integer "importance2"
    t.integer "importance3"
    t.integer "importance4"
    t.integer "importance5"
    t.index ["week_id"], name: "index_exercises_on_week_id"
  end

  create_table "motivations", force: :cascade do |t|
    t.text "personal_values1"
    t.text "personal_values2"
    t.text "personal_values3"
    t.text "personal_values4"
    t.text "personal_values5"
    t.text "energized_by1"
    t.text "energized_by2"
    t.text "energized_by3"
    t.text "energized_by4"
    t.text "energized_by5"
    t.text "drained_by1"
    t.text "drained_by2"
    t.text "drained_by3"
    t.text "drained_by4"
    t.text "drained_by5"
    t.text "context"
    t.text "motivations1"
    t.text "motivations2"
    t.text "motivations3"
    t.text "motivations4"
    t.text "motivations5"
    t.bigint "week_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["week_id"], name: "index_motivations_on_week_id"
  end

  create_table "reflections", force: :cascade do |t|
    t.text "notes"
    t.bigint "week_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["week_id"], name: "index_reflections_on_week_id"
  end

  create_table "stakeholders", force: :cascade do |t|
    t.text "q1"
    t.text "q2"
    t.text "q3"
    t.text "q4"
    t.text "q5"
    t.text "q6"
    t.bigint "week_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "s2q1"
    t.text "s2q2"
    t.text "s2q3"
    t.text "s2q4"
    t.text "s2q5"
    t.text "s2q6"
    t.text "s3q1"
    t.text "s3q2"
    t.text "s3q3"
    t.text "s3q4"
    t.text "s3q5"
    t.text "s3q6"
    t.text "s4q1"
    t.text "s4q2"
    t.text "s4q3"
    t.text "s4q4"
    t.text "s4q5"
    t.text "s4q6"
    t.index ["week_id"], name: "index_stakeholders_on_week_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "seniority"
    t.string "email"
    t.integer "direct_reports"
    t.string "username"
    t.string "password_digest"
    t.text "bio"
    t.integer "location_zip"
    t.string "location_name"
    t.string "company"
    t.string "logo"
    t.string "photo"
    t.integer "role"
    t.string "manager_email"
    t.string "dr_email"
    t.bigint "cohort_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cohort_id"], name: "index_users_on_cohort_id"
  end

  create_table "weeks", force: :cascade do |t|
    t.bigint "workbook_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "week_number"
    t.index ["workbook_id"], name: "index_weeks_on_workbook_id"
  end

  create_table "workbooks", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_workbooks_on_user_id"
  end

  add_foreign_key "commits", "weeks"
  add_foreign_key "exercises", "weeks"
  add_foreign_key "motivations", "weeks"
  add_foreign_key "reflections", "weeks"
  add_foreign_key "stakeholders", "weeks"
  add_foreign_key "users", "cohorts"
  add_foreign_key "weeks", "workbooks"
  add_foreign_key "workbooks", "users"
end
