$(document).ready(function() {
    var data = [{
            "author": "Author: Michelle Obama",
            "imageLink": "images/book1.jpg",
            "Library": "Found at: Two Rivers Bookshop",
            "description": "Description: The Biggest book of 2018, Becoming has broken several records across the world! And it is worth all the hype.  Michelle  Obama pours her heart, soul, and humor into this captivating memoir. Everything in her down to earth storytelling and vulnerability makes it impossible to read this book and not find something that resonates deeply with your experience.",
            "title": "Title: Becoming"
        },
        {
            "author": "Author: Sunny Bidra",
            "imageLink": "images/book2.jpg",
            "Library": "Found at: West Gate Bookshop",
            "description": "Description: Sunny Bindra has created a phenomenal spur with this book. It is a must read for every Kenyan in the ever growing consumerism market. Everyone from the customers to the managers to the entrepreneurs to the service providers can get something critical to take home.",
            "title": "Title: The Bigger Deal"
        },
        {
            "author": "Author:  Jackson Bikko",
            "imageLink": "images/book3.jpg",
            "Library": "Found at :Prestige Bookshop",
            "description": "Description: Jackson Biko –also known as Bikozulu- wrote his debut book and it is relatable, full of quirky humour, and life lessons. It is a story about Larry. Larry who drinks, hates his father, and shags girls. However, it is also a story about relationships, substance abuse, and the consequences of our actions. This quick read is a great conversation starter for any Kenyan.",
            "title": "Title: Drunk"
        },
        {
            "author": "Author: Peter Kimani",
            "imageLink": "images/book4.jpg",
            "Library": "Found at:Prestige Bookshop",
            "description": "Jackson Biko –also known as Bikozulu- wrote his debut book and it is relatable, full of quirky humour, and life lessons. It is a story about Larry. Larry who drinks, hates his father, and shags girls. However, it is also a story about relationships, substance abuse, and the consequences of our actions. This quick read is a great conversation starter for any Kenyan.",
            "title": "Title: Dance of the Jacaranda"
        },
        {
            "author": "Author: Peter Kimani",
            "imageLink": "images/book5.jpg",
            "Library": "Found at: Savanis Bookshop",
            "description": "Description: Peter Kimani has taken a mantle of proportional weight by writing this history of the building of the railway through multiple perspectives. Dance of the Jakaranda starts with a mysterious kiss that leads to the unraveling of a forgotten history. Every lover of historical fiction is drawn into the intricate details of this beautiful novel.",
            "title": "Title: Dance of the Jacaranda"
        },
        {
            "author": "Author: Phoebe Asiyo",
            "imageLink": "images/book6.jpg",
            "Library": "Found at:Sarit Bookshop",
            "description": "Description: Phoebe Asiyo’s name is very much tied to the woman empowerment movement in Kenya. Her autobiography brings to life the adversities she has faced on this upward climb towards female emancipation and participation.",
            "title": "Title: It is possible"
        },
        {
            "author": "Author: Ketebul Music",
            "imageLink": "images/book7.jpg",
            "Library": "Found at: TRM Bookshop",
            "description": "Description: Although dozens of works have been published over the years on various characteristics of popular music in Kenya – from conventional folk to hip hop – none captures the history of music and its players as authoritatively as Shades of Benga: The Story of Popular Music in Kenya. Ketebul Music undertook the arduous task of meticulously putting together the content that would faithfully recount the remarkable story of the development of Kenyan music in a manner previously not attempted.",
            "title": "Title: Shades of Benga"
        },
        {
            "author": "Author: Nelson Mandela",
            "imageLink": "images/book8.jpg",
            "Library": "Found at: Junction Mall Bookshop",
            "description": "Description: Organized chronologically and divided by the four venues in which he was held as a sentenced prisoner, The Prison Letters of Nelson Mandela begins in Pretoria Local Prison, where Mandela was held following his 1962 trial.  Whether providing unwavering support to his also-imprisoned wife or outlining a human-rights philosophy that resonates today, The Prison Letters of Nelson Mandela reveals the heroism of a man who refused to compromise his moral values in the face of extraordinary punishment. Ultimately, these letters position Mandela as one of the most inspiring figures of the twentieth century.",
            "title": "Title: Prison Letters of Nelson Mandela"
        },
        {
            "author": "Author: Thomas Sankara",
            "imageLink": "images/book9.jpg",
            "Library": "Found at: Yaya Bookshop",
            "description": "Description: Thomas Sankara (1949–87) was one of the most important anti-imperialist leaders of twentieth-century Africa. His declaration that fundamental change would require “a certain amount of madness” was a driving force behind the Burkinabè Revolution that eventually led to his being elected president of Burkina Faso. This book examines Sankara’s political philosophies and legacies and their relevance today.",
            "title": "Title: A Certain Amount of Madness"
        },
        {
            "author": "Author: Wangari Maathai",
            "imageLink": "images/book11.jpg",
            "Library": "Found at: Text Book Centre Bookshop",
            "description": "Description: Wangari Maathai was one of the most revered women in Kenya. She was determined, letting nothing (and no one) stand in her way. She chronicles her struggle from an early age in her rural home (to get an education when women were not allowed to do so), to becoming the first woman to head a university department. In 1977, she started the Green Belt Movement to plant trees across Kenya and to stop land grabs. This resulted in a lot of run-ins with the Kenyan government. In 2004 she was awarded the Nobel Peace Prize.",
            "title": "Title: Unbowed"
        },
        {
            "author": "Author: Beryl Markham",
            "imageLink": "images/book12.jpg",
            "Library": "Found at: Prestige Bookshop",
            "description": "Description: Beryl Markham is a stark contrast to Wangari. She tells of her life in Kenya during the 1920s and 1930s when colonialism had a tight grip on Kenya. She is said to be the first woman to cross the Pacific Ocean alone. That last part is debatable, but she certainly made the first female crossing. In the book, Beryl writes of her aviation adventures and her horse training days in Kenya. ",
            "title": "Title: West with the Night"
        },
        {
            "author": "Author: Robin Wiszowaty",
            "imageLink": "images/book13.jpg",
            "Library": "Found at: Yaya Bookshop",
            "description": "Description: Robin Wiszowaty was a normal girl living in the middle-class suburbs of Illinois until her life was upended during her gap year in Kenya. She ends up in an impoverished part of Maasailand. Living under the guidance of her adopted mother, she is forced to face issues she’s never considered: extreme poverty, drought, female circumcision, corruption – and discovers love in the most unexpected places. ",
            "title": "Title: My Maasai Life: From Suburbia to Savannah"
        },
        {
            "author": "Author: Joy Adamson",
            "imageLink": "images/book14.jpg",
            "Library": "Found at: Junction Mall Bookshop",
            "description": "Description: This is an account of Elsa’s journey, a lion cub adopted by conservationists Joy Adamson and her husband, George. They raised her so she could return to the wild after Joy killed Elsa’s mother, having mistaken her for a male lion. ",
            "title": "Title: Born Free"
        },
        {
            "author": "Author:Isak Dinesen (Karen Blixen)  ",
            "imageLink": "images/book15.jpg",
            "Library": "Found at: Yaya Bookshop",
            "description": "Description: This is, perhaps, the most recognised book about Kenya and was made into a movie. In the book, the author repeatedly fails to differentiate the country from the continent. She refers to Kenya as Africa throughout the book. The opening line, though, ‘I had a farm in Africa at the foot of the Ngong Hills’, captures a lot of readers’ imaginations. ",
            "title": "Title: Out of Africa"
        },
        {
            "author": "Author: Ngugi WA Thiong'o",
            "imageLink": "images/book16.jpg",
            "Library": "Found at: Text Book Centre Bookshop",
            "description": "Description:The book is set to the backdrop of the Mau Mau rebellion, in a small village, four days before Kenya’s independence from Britain. Ngugi wa Thiong’o employs flashback to transport the reader to the Emergency Period (1952-1960), during which colonialists detained and tortured civilians. The book reveals the role each villager played towards liberation and the secrets they held. ",
            "title": "Title: A grain of wheat"
        },
        {
            "author": "Author: MM Kaye",
            "imageLink": "images/book19.jpg",
            "Library": "Found at: TRM Bookshop",
            "description": "Description: Victoria Caryll is offered a job at Flamingo, her aunt’s family estate in the Rift Valley. She is excited to go back in the hopes of seeing Eden DeBrett, her ex-fiancé. But things do not turn out for the best. She finds a sombre environment, with people still recovering from the Mau Mau rebellion, as well as a murder in the family. ",
            "title": "Title: Death in Kenya "
        },
        {
            "author": "Author: Bruce Trzebinski",
            "imageLink": "images/book18.jpg",
            "Library": "Found at: Savanis Bookshop",
            "description": "Description: This witty and humorous book is Bruce Trzebinski first novel. An English banker, learns firsthand about corruption in Kenya as he deals with an Indian businessman and his Arab accomplice, unscrupulous police officers, and a street-smart prostitute.",
            "title": "Title: The Elephant Dropping"
        },
        {
            "author": "Author: John Le Carre",
            "imageLink": "images/book17.jpg",
            "Library": "Found at: prestige Bookshop",
            "description": "Description: This riveting murder mystery is set in Northern Kenya. Tessa Quayle has just been murdered. Justin, her husband, travels to Northern Kenya to find out what happened to his beloved wife. In the process, he uncovers more about Tessa than he ever thought imaginable. The book has been made into a movie directed by Fernando Meirelles. ",
            "title": "Title: The Constant Gardener"
        },
        {
            "author": "Author: Elpeth Huxley",
            "imageLink": "images/book20.jpg",
            "Library": "Found at: Yaya Bookshop",
            "description": "Description:A royal family visits Kenya in the 1930s for a safari, but Lady Baradale’s prized jewellery is stolen. Vachell, a young Canadian officer, is called in to investigate but it soon turns into a murder case when Lady Baradale is found dead with a gunshot wound to her head. ",
            "title": "Title: Murder on Safari"
        },
        {
            "author": "Author: Ben Harowitz",
            "imageLink": "images/book10.jpg",
            "Library": "Found at: Prestige Bookshop",
            "description": "Description: Before the success there is the multiple screw-ups, the doubt, and the decisions made that instantly fill the one making them with regret. In The Hard Thing about Hard Things, Ben Harowitz is brutally honest with his readers about what the journey entails. Ben captures how every aspiring business and entrepreneur needs to understand the process –which is sometimes painful- before the result.",
            "title": "Title: The Hard Thing about Hard Things."
        }
    ];


    $('#txt-search').keyup(function() {
        var searchField = $(this).val();
        if (searchField === '') {
            $('#filter-records').html('');
            return;
        }

        var regex = new RegExp(searchField, "i");
        var output = '<div class="row">';
        var count = 1;
        $.each(data, function(key, val) {
            if ((val.Library.search(regex) != -1) || (val.title.search(regex) != -1) || (val.author.search(regex) != -1)) {
                output += '<div class="col-md-12 well">';
                output += '<div class="col-md-6"><img class="img-responsive" src="' + val.imageLink + '" alt="' + val.title + '" /></div>';
                output += '<div class="col-md-6">';
                output += '<h4>' + val.title + '</h4>';
                output += '<h5>' + val.author + '</h5>'
                output += '<p>' + val.Library + '</p>'
                output += '<p>' + val.description + '</p>'
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