class AddUserRefToHistory < ActiveRecord::Migration[6.0]
  def change
    add_reference :histories, :user, null: false, foreign_key: true
  end
end
