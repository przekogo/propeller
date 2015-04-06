class Thing < ActiveRecord::Base
  belongs_to :user
  
  def self.search(search)
    if search
      where('content LIKE ?', "%#{search}%")
    else
      all
    end
  end
end