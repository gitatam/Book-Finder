 $(document).ready(function() {
  // create a json file for our searchable content
  var data = [{
       "id": "1",
       "book_name": "Think Big",
       "Author": "Ben_Carson",
       "book_library": "Text Book Centre",
       "profile_image": "default_profile.png"
     }, {
       "id": "2",
       "book_name": "Garrett Winters",
       "Author": "Nel_Carson",
       "book_library": "Macmillan",
       "profile_image": "default_profile.png"
     }, {
       "id": "3",
       "book_name": "Harry Potter",
      "Author": "Nel_Carson",
       "book_library": "Macmillan",
       "profile_image": "default_profile.png"
     }, {
       "id": "4",
       "book_name": "River Between",
       "Author": "Ngugi",
       "book_library": "Text Book Centre",
       "profile_image": "default_profile.png"
     }, {
       "id": "5",
       "book_name": "Whale Rider",
       "Author": "Nelson",
       "book_library": "Text Book Centre",
       "profile_image": "default_profile.png"
     }, {
       "id": "6",
       "book_name": "My life in crime",
       "Author": "Kiriamiti",
       "book_library": "Text Book Centre",
       "profile_image": "default_profile.png"
     },{
       "id": "7",
       "book_name": "Facing mt Kenya",
       "Author": "Kenyatta",
       "book_library": "Text Book Centre",
       "profile_image": "default_profile.png"
     }, {
       "id": "8",
       "book_name": "Overcoming odds",
       "Author": "Awori",
       "book_library": "Text Book Centre",
       "profile_image": "default_profile.png"
     }, {
       "id": "9",
       "book_name": "River and the source",
       "Author": "Agola",
       "book_library": "Text Book Centre",
       "profile_image": "default_profile.png"
     }, {
       "id": "10",
       "book_name": "Things fall apart",
       "Author": "Karanja",
       "book_library": "Text Book Centre",
       "profile_image": "default_profile.png"
     }];

     $('#txt-search').keyup(function() {
       var searchField = $(this).val();
       if (searchField === '') {
         $('#filter-records').html('');
         return;
       }

      // script that sends an AJAX request to retrieve json filter



 });
