
# Delete all previous seed data // blank slate
User.delete_all
Group.delete_all
Review.delete_all
Location.delete_all
GroupLocation.delete_all
GroupUser.delete_all

# Users
u1 = User.create(provider: "facebook", uid: "10203844294482291", first_name: "Peter", last_name: "Schulz", image: "http://graph.facebook.com/10203844294482291/picture")
u2 = User.create(provider: "facebook", uid: "10203844294482291", first_name: "Melody", last_name: "Serra", image: "http://graph.facebook.com/10203844294482291/picture")
u3 = User.create(provider: "facebook", uid: "10203844294482291", first_name: "Tim", last_name: "Gray", image: "http://graph.facebook.com/10203844294482291/picture")

#Group
g1 = Group.create(name: "General Assembly", lat:"37.7912563", lng:"-122.4006792",)
