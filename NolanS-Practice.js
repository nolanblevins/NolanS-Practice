items = new meteor.collection("items")

if (Meteor.isClient) {
  Template.list.helpers({
    items: function() {
      return items.find();
    },
doneClass:function() {
  if(this.done)
    return"done";
  else
    return"";
    }
  });

  Template.controls.events({
  'submit form': function(event) {
event.preventDefault();

var description = $(event.target).find('[id=newItems').val()
Items.insert({description:description});
   }
  });

Template.lists.events({
  'click li' : function() {
items.update({_id:this._id},{$set:{done:!this.done}});
  }
 });
}
