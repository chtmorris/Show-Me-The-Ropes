require 'spec_helper'

describe Pin do

  describe "Pin drops" do
    context "guide clicks map after add pin button" do
      it "should add one new pin on map, with correct click location"
      it "should show drop pin form"
    end

    context "non-guide clicks map after add pin button" do
      it "should not add pin"
    end

    context "guide clicks map after adding pin" do
      it "should not add new pin"
    end
  end

  describe "Pin deletions" do
    context "user with guide_id clicks on a pin" do
      it "should give option to delete if pin belongs to guide"
      it "should not give option to delete if pin does not belong to guide"
    end

    context "Guide clicks to delete their own pin" do
      it "should show final deletion confirmation message"
      it "should delete pin from pins table after accepting confirmation message"
    end
  end

end
