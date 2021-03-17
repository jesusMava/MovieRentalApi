class CreateHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
      t.date :rental_day
      t.boolean :status

      t.timestamps
    end
  end
end
