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
       }, {
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
         $('#txt-search').keyup(function() {
           var searchField = $(this).val();
           if (searchField === '') {
             $('#filter-records').html('');
             return;
           }
           // method to search query against all data in json file and display results
           var regex = new RegExp(searchField, "i");
           var output = '<div class="row">';
           var count = 1;
           $.each(data, function(key, val) {
             if ((val.Author.search(regex) != -1) || (val.book_name.search(regex) != -1)) {
               output += '<div class="col-md-6 well">';
               output += '<div class="col-md-3"><img class="img-responsive" src="' + val.profile_image + '" alt="' + val.book_name + '" /></div>';
               output += '<div class="col-md-7">';
               output += '<h5>' + val.book_name + '</h5>';
               output += '<p>' + val.Author + '</p>'
               output += '</div>';
               output += '</div>';
               if (count % 2 == 0) {
                 output += '</div><div class="row">'
               }
               count++;
             }
           });
           output += '</div>';
           $('#filter-records').html(output);
         });
       });
