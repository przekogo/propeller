class SheetsController < ApplicationController
  def index
    @things = Thing.all
    if user_signed_in?
      @mythings = current_user.things
    end
  end
end