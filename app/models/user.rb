class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :things

  def self.emailsearch(search)
    if search
      where('email LIKE ?', "%#{search}%")
    else
      all
    end
  end
end