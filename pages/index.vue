<template>
  <div class="custom-bg min-h-screen p-8">
    <h2 class="text-6xl text-white font-heading p-4 text-center">
      Connor's Dashboard
    </h2>
    <div class="max-w-1200 mx-auto my-auto flex items-center justify-center">
      <div class=" text-black w-full custom-grid">
        <div class="h-full bg-cover bg-fixed flex flex-col items-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform col-span-2 music">
          <h2 class="text-3xl font-body m-2">
            Music I'm listening to
          </h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/6uRxytmYaRv0g3QWe3ajBa"
            width="300"
            height="280"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
        <div class="h-full bg-cover bg-fixed flex flex-col items-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform col-span-2 p-4 topics">
          <h2 class="text-3xl font-body mb-2">
            Topics I'm into atm
          </h2>
          <div class="bg-sand w-75 h-full rounded-md">
            <ul class="text-2xl font-heading text-black text-left p-4">
              <li>Nuclear Energy - Not evil</li>
              <li>Genetically Modified foods - Also not evil</li>
              <li>Film photography</li>
              <li>Stoicism</li>
            </ul>
          </div>
        </div>
        <div class="h-full bg-cover bg-fixed flex flex-col items-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform col-span-2 weather">
          <h2 class="text-3xl font-body m-2">
            Weather in Amsterdam
          </h2>
          <div class="elfsight-app-348188a9-4cfb-4416-a7f4-5d9d6190e0af" />
        </div>
        <div class="h-full bg-cover bg-fixed flex flex-col items-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform col-span-2 books">
          <h2 class="text-3xl font-body m-2">
            Books Im reading
          </h2>
          <div id="gr_custom_widget_1600000871" />
        </div>
        <div class="h-full bg-cover bg-fixed flex flex-col items-center text-center transition-all duration-300 rounded-md ease-in bg-main-image transform col-span-2 p-4 social">
          <h2 class="text-3xl font-body mb-2">
            Get In touch
          </h2>
          <div class=" w-full p-4 rounded-md">
            <ul class="flex justify-between">
              <li>
                <a href="https://www.linkedin.com/in/connor-graham/">
                  <i class="w-32 bg-center bg-no-repeat h-25 bg-contain block linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/igconnorr/">
                  <i class="w-32 bg-center bg-no-repeat h-25 bg-contain block instagram" />
                </a>
              </li>
              <li>
                <a href="mailto:graham.connor@gmail.com">
                  <i class="w-32 bg-center bg-no-repeat h-25 bg-contain block email" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  mounted () {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://apps.elfsight.com/p/platform.js')
    document.head.appendChild(recaptchaScript)
    const bookScript = document.createElement('script')
    bookScript.setAttribute('src', 'https://www.goodreads.com/review/custom_widget/24036358.Connor\'s%20bookshelf:%20currently-reading?cover_position=left&cover_size=small&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=author&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1600000871&widget_text_color=000000&widget_title_size=medium&widget_width=medium')
    document.head.appendChild(bookScript)
  }

}

</script>

<style>

.instagram {
  background-image: url(~assets/icons/instagram.svg);
}

.linkedin {
  background-image: url(~assets/icons/linkedin.svg);
}

.email {
  background-image: url(~assets/icons/email.svg);
}

.custom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2px 2px;
  grid-template-areas:
    "music music topics topics"
    "weather weather books books"
    "social social books books";
}

.music { grid-area: music; }

.topics { grid-area: topics; }

.weather { grid-area: weather; }

.books { grid-area: books; }

.social { grid-area: social; }

.custom-bg {
  background: #232526;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.eaw-weather-info + div{
  display: none;
}

.gr_custom_container_1600000871 {
    /* customize your Goodreads widget container here*/
    border: 1px solid gray;
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: #FFFFFF;
    color: #000000;
    width: 360px
    }
    .gr_custom_header_1600000871 {
    /* customize your Goodreads header here*/
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 120%
    }
    .gr_custom_each_container_1600000871 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
    }
    .gr_custom_book_container_1600000871 {
    /* customize your book covers here */
    overflow: hidden;
    height: 60px;
    float: left;
    margin-right: 4px;
    width: 39px;
    }
    .gr_custom_author_1600000871 {
    /* customize your author names here */
    font-size: 10px;
    }
    .gr_custom_tags_1600000871 {
    /* customize your tags here */
    font-size: 10px;
    color: gray;
    }
    .gr_custom_rating_1600000871 {
    /* customize your rating stars here */
    float: right;
    }

</style>
