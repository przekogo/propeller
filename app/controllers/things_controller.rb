class ThingsController < ApplicationController
  def index
    user = User.emailsearch(params[:search]).first
    if user.nil?
      @things = Thing.search(params[:search])
    else
      @things = (Thing.search(params[:search]) + user.things).uniq
    end
    if user_signed_in?
      @mythings = current_user.things
    end
  end
  def create
    if user_signed_in?
      @thing = Thing.new(thing_params)
      respond_to do |format|
        if @thing.save
          @thing = Thing.new
          @things = Thing.all
          flash.now[:notice] = "Thing added"
          format.js
        else
          flash.now[:alert] = "There was a problem adding your thing, please try again"
          render "partials/flashes"
        end
      end
    else
      flash.now[:alert] = "You have to be logged in to add things"
      render "partials/flashes"
    end
  end
  def update
    if user_signed_in?
      @thing = Thing.find(params[:id])
      respond_to do |format|
        if @thing.update(thing_params)
          @thing = Thing.new
          @things = Thing.all
          flash.now[:notice] = "Thing updated"
          format.js
        else
            flash.now[:alert] = "There was a problem editing the thing, please try again"
            render "partials/flashes"
        end
      end
    else
      flash.now[:alert] = "You have to be logged in to edit things"
      render "partials/flashes"
    end
  end
  def destroy
    if user_signed_in?
      @thing = Thing.find(params[:id])
      @thing.destroy
      respond_to do |format|
        @thing = Thing.new
        @things = Thing.all
        flash.now[:notice] = "Thing deleted"
        format.js
      end
    else
      flash.now[:alert] = "You have to be logged in to delete things"
      render "partials/flashes"
    end
  end

  private
    def thing_params
      params.permit(:content, :user_id, :id)
    end
end