class Car < ApplicationRecord
  attr_accessor :remove_picture

  has_one_attached :car_picture

  after_save :purge_picture, if: :remove_picture

  private
  def purge_picture
    car_picture.purge_later
  end

end
