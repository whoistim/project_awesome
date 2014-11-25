
# Delete all previous seed data // blank slate
User.delete_all
Group.delete_all
Review.delete_all
Location.delete_all
GroupLocation.delete_all
GroupUser.delete_all

# Users
  u1 = User.create(provider: "facebook", uid: "10203844294482291", first_name: "Peter", last_name: "Schulz", image: "http://graph.facebook.com/10203844294482291/picture?width=200&height=200", oauth_token: "CAALvadZCq1V4BADlKzZA0VBerJ2NlgK7qVtJ32zdqgfp0PEZBkCWYofDlAdPt7VsZCmXVZCdUWx33sZB0UReGEFHFHuVLaVAvuzbtzbZCxWw6vBcUWML2I6ZAfQPlgskzJQQ2R25AeCuHz5Yo8ZBXbYjocZCWObfNaQ83v0ZAXo6AzZAxZCKxGmrLPyVCu6MsLwa8hDBGpZBbH65Djcy9841qj2XLZA...", oauth_expires_at: "2015-01-20 23:29:57")
  u2 = User.create(provider: "facebook", uid: "10103525070422447", first_name: "Melody", last_name: "Serra", image: "http://graph.facebook.com/10103525070422447/picture?width=200&height=200?width=200&height=200", oauth_token: "CAALvadZCq1V4BABf9cmWuYtQ5aL4qGBzQiAlZAYopZBpTsLHswjrMYR2tINBq1GA9vHifDxg45uvfYFzcbu1MUwNmXdhR6kZAhbcQHtUIio96Bgy63sqk3yAqCge1xy1Dwt4eguEGhZCCZAHhqOQHrKzP9mgfZAzjBV70Ejlj69YZAfd9aYI7g7gH5J1DWp4xR3cSTGxOZARV7WEXOqP9n49o", oauth_expires_at: "2015-01-22 19:01:17")
  u3 = User.create(provider: "facebook", uid: "688572161238150", first_name: "Tim", last_name: "Gray", image: "http://graph.facebook.com/688572161238150/picture?width=200&height=200", oauth_token: "CAALvadZCq1V4BACwZApBZCb0TwYrWAkzDD3sEvH34nyMnnufDZBrNhjNjZBIXvrpjHd3eRG2JzLFKQnftclZB4sMw4ZAZCkFYaIg5rMLoyrM1mjd9ckekYS66Wxcm2QrrqBOr7P6q8XNR48FoVcJTEhA2japZAyZAZCERqW90vPKaM0RTQ2k2xZAqgrgIAQdatMsphHT28p20rVkFZBEfR9mGMtAS", oauth_expires_at: "2015-01-21 22:08:12")

# Groups
  g1 = Group.create(name: "General Assembly", lng:"-122.4006792", lat:"37.7912563")
  g2 = Group.create(name: "WDI", lng:"-122.4006792", lat:"37.7912563")

# Locations
  l1 = Location.create(title:"Mixt Greens",lng:"-122.40063700000002", lat:"37.791578", address:"120 Sansome St., San Francisco, CA", place_id:"ChIJ62yCEWKAhYARNL0YQVpRuKg", website:"http://mixtgreens.com", phone_number:"415-555-5555")
  l2 = Location.create(title:"Rickhouse",lng:"-122.40386799999999", lat:"37.79046", address:"246 Kearny St, San Francisco", place_id:"ChIJd7ebnImAhYARhr91iINx01g", website:"http://www.rickhousebar.com/", phone_number:"415-777-7777")
  l3 = Location.create(title:"House of NanKing",lng:"-122.40542600000003", lat:"37.796477", address:"919 Kearny St, San Francisco, CA 94133, United States", place_id:"ChIJvS92wfSAhYARC2tq3BmjmIM", website:"http://poop.com", phone_number:"415-333-3333")

#GroupLocation
  gl1 = GroupLocation.create(group_id: g1.id, location_id: l1.id)
  gl2 = GroupLocation.create(group_id: g1.id, location_id: l2.id)
  gl3 = GroupLocation.create(group_id: g1.id, location_id: l3.id)
  #group 2's locations
  gl4 = GroupLocation.create(group_id: g2.id, location_id: l1.id)
  gl5 = GroupLocation.create(group_id: g2.id, location_id: l2.id)

#GroupLocation
  gu1 = GroupUser.create(group_id: g1.id, user_id: u1.id, is_owner: true)
  gu2 = GroupUser.create(group_id: g1.id, user_id: u2.id, is_owner: false)
  gu3 = GroupUser.create(group_id: g1.id, user_id: u3.id, is_owner: false)
  #group 2's users
  gu4 = GroupUser.create(group_id: g2.id, user_id: u1.id, is_owner: false)
  gu5 = GroupUser.create(group_id: g2.id, user_id: u2.id, is_owner: true)

# Reviews
  r1 = Review.create(rating:1, review:"THIS IS A REVIEW OF MIXT GREENS", user_id: u1.id, group_location_id: gl1.id)
  r2 = Review.create(rating:-1, review:"THIS IS A REVIEW OF Rickhouse", user_id: u2.id, group_location_id: gl2.id)
  r3 = Review.create(rating:1, review:"THIS IS A REVIEW OF House of NanKing", user_id: u3.id, group_location_id: gl3.id)
  #group 2's reviews
  r1 = Review.create(rating:1, review:"THIS IS A REVIEW OF MIXT GREENS", user_id: u1.id, group_location_id: gl4.id)
  r2 = Review.create(rating:-1, review:"THIS IS A REVIEW OF Rickhouse", user_id: u2.id, group_location_id: gl5.id)



