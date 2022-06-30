
  let clinetId = "ndnd9fge7fevtvtm2ury70hku65rru";
  let clinetSecret = "eoma9mcsgphnzjn6lajc3ycxa8o3pr";
  
  function getTwitchAuthorization() {
      let url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;
  
      return fetch(url, {
      method: "POST",
      })
      .then((res) => res.json())
      .then((data) => {
          return data;
      });
  }
  
  async function getStreams() {
      const endpoint = "https://api.twitch.tv/helix/streams?user_login=woowakgood&user_login=vo_ine&user_login=jingburger&user_login=lilpaaaaaa&user_login=cotton__123&user_login=gosegugosegu&user_login=viichan6&user_login=111roentgenium&user_login=chunyangkr";
  
      let authorizationObject = await getTwitchAuthorization();
      let { access_token, expires_in, token_type } = authorizationObject;
  
      token_type =
      token_type.substring(0, 1).toUpperCase() +
      token_type.substring(1, token_type.length);
  
      let authorization = `${token_type} ${access_token}`;
  
      let headers = {
      authorization,
      "Client-Id": clinetId,
      };
  
      fetch(endpoint, {
      headers,
      })
      .then((res) => res.json())
      .then((data) => renderStreams(data));
  }
  
  function renderStreams(data) {
      let { data: streams } = data;
      let streamsContainer = document.querySelector("div.streaming-online");
  
      streams.forEach((stream) => {
      let { thumbnail_url: thumbnail, title, viewer_count, user_name, user_login, game_name, started_at, tag_ids } = stream;
      let hdThumbnail = thumbnail
          .replace("{width}", "1280")
          .replace("{height}", "720") + "?" + new Date().getTime();
      streamsContainer.innerHTML += `
      
        <div class="streamer-simboll-online">
            <a href="https://twitch.tv/${user_login}" target="_blank">
                <div class="profile${user_login}"></div>
                <p>${user_name}</p>
                <div>
                ${viewer_count
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
                </div>
            </a>
        </div>
  
      `;
      });
  }
  
  getStreams();