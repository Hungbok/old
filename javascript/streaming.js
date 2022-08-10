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
    const endpoint = "https://api.twitch.tv/helix/streams?user_login=woowakgood&user_login=vo_ine&user_login=jingburger&user_login=lilpaaaaaa&user_login=cotton__123&user_login=gosegugosegu&user_login=viichan6&user_login=111roentgenium&user_login=chunyangkr&user_login=hanryang1125&user_login=saddummy&user_login=nokduro&user_login=2chamcham2&user_login=dogcat0926&user_login=secretmemolee&user_login=bujungingan&user_login=dokkhye_&user_login=ssoph25&user_login=mitsune_89&user_login=kwonmin98&user_login=realchunshik&user_login=dandapbug&user_login=2ducksoo&user_login=hikiking0&user_login=wakphago&user_login=dopamine_dr&user_login=cman0327&user_login=rusuk_&user_login=pung_sin&user_login=friedshrimp70&user_login=dogswellfish&user_login=nodolly&user_login=charming_jo&user_login=invenxd&user_login=s2unsongi_s2_tm&user_login=businesskim111&user_login=freeter1999&user_login=carnarjungtur";

    let authorizationObject = await getTwitchAuthorization();
    let {
        access_token,
        expires_in,
        token_type
    } = authorizationObject;

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
    let {
        data: streams
    } = data;
    let streamsContainer = document.querySelector("div.streams");

    streams.forEach((stream) => {
        let {
            thumbnail_url: thumbnail,
            title,
            viewer_count,
            user_name,
            user_login,
            game_name,
            started_at,
            tag_ids
        } = stream;
        let hdThumbnail = thumbnail
            .replace("{width}", "1280")
            .replace("{height}", "720") + "?" + new Date().getTime();
        let start_time = "방송 시작 " + started_at
            .replace("T00", " 09")
            .replace("T01", " 10")
            .replace("T02", " 11")
            .replace("T03", " 12")
            .replace("T04", " 13")
            .replace("T05", " 14")
            .replace("T06", " 15")
            .replace("T07", " 16")
            .replace("T08", " 17")
            .replace("T09", " 18")
            .replace("T10", " 19")
            .replace("T11", " 20")
            .replace("T12", " 21")
            .replace("T13", " 22")
            .replace("T14", " 23")
            .replace("T15", " 24")
            .replace("T16", " 01")
            .replace("T17", " 02")
            .replace("T18", " 03")
            .replace("T19", " 04")
            .replace("T20", " 05")
            .replace("T21", " 06")
            .replace("T22", " 07")
            .replace("T23", " 08")
            .replace("T00", " 09")
            .replace("Z", "");
        streamsContainer.innerHTML += `
        
        <div class="stream-container ttv${user_login}-player">
            <a class="ttv${user_login}-twitch" href="https://twitch.tv/${user_login}" target="_blank">
                <div class="image"><div class="iframe ttv${user_login}"></div></div>
                <img id="preview-${user_login}" src="${hdThumbnail}"/>
                <div class="viewer_count">
                    <p>
                        ${viewer_count
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명 시청중
                    </p>
                </div>
                <h2>${user_name} (${user_login})</h2>
                <h3>${title}</h3>
                <h3>${game_name}</h3>
            </a>
        </div>
    
        `;
    });
}

getStreams();
let hanryang1125_live = document.querySelector('.ttvhanryang1125-live');
let hanryang1125_off = document.querySelector('.ttvhanryang1125-off');
let hanryang1125_refresh = document.querySelector('.ttvhanryang1125-refresh');
let woowakgood_live = document.querySelector('.ttvwoowakgood-live');
let woowakgood_off = document.querySelector('.ttvwoowakgood-off');
let woowakgood_refresh = document.querySelector('.ttvwoowakgood-refresh');
let lilpaaaaaa_live = document.querySelector('.ttvlilpaaaaaa-live');
let lilpaaaaaa_off = document.querySelector('.ttvlilpaaaaaa-off');
let lilpaaaaaa_refresh = document.querySelector('.ttvlilpaaaaaa-refresh');
let cotton__123_live = document.querySelector('.ttvcotton__123-live');
let cotton__123_off = document.querySelector('.ttvcotton__123-off');
let cotton__123_refresh = document.querySelector('.ttvcotton__123-refresh');
let jingburger_live = document.querySelector('.ttvjingburger-live');
let jingburger_off = document.querySelector('.ttvjingburger-off');
let jingburger_refresh = document.querySelector('.ttvjingburger-refresh');
let vo_ine_live = document.querySelector('.ttvvo_ine-live');
let vo_ine_off = document.querySelector('.ttvvo_ine-off');
let vo_ine_refresh = document.querySelector('.ttvvo_ine-refresh');
let gosegugosegu_live = document.querySelector('.ttvgosegugosegu-live');
let gosegugosegu_off = document.querySelector('.ttvgosegugosegu-off');
let gosegugosegu_refresh = document.querySelector('.ttvgosegugosegu-refresh');
let viichan6_live = document.querySelector('.ttvviichan6-live');
let viichan6_off = document.querySelector('.ttvviichan6-off');
let viichan6_refresh = document.querySelector('.ttvviichan6-refresh');
let chunyangkr_live = document.querySelector('.ttvchunyangkr-live');
let chunyangkr_off = document.querySelector('.ttvchunyangkr-off');
let chunyangkr_refresh = document.querySelector('.ttvchunyangkr-refresh');
let saddummy_live = document.querySelector('.ttvsaddummy-live');
let saddummy_off = document.querySelector('.ttvsaddummy-off');
let saddummy_refresh = document.querySelector('.ttvsaddummy-refresh');
let nokduro_live = document.querySelector('.ttvnokduro-live');
let nokduro_off = document.querySelector('.ttvnokduro-off');
let nokduro_refresh = document.querySelector('.ttvnokduro-refresh');
let chamcham2_live = document.querySelector('.ttv2chamcham2-live');
let chamcham2_off = document.querySelector('.ttv2chamcham2-off');
let chamcham2_refresh = document.querySelector('.ttv2chamcham2-refresh');
let roentgenium_live = document.querySelector('.ttv111roentgenium-live');
let roentgenium_off = document.querySelector('.ttv111roentgenium-off');
let roentgenium_refresh = document.querySelector('.ttv111roentgenium-refresh');


let hanryang1125_url = "chrome-extension://emnphkkblegpebimobpbekeedfgemhof/player.html#https://video-weaver.fra05.hls.ttvnw.net/v1/playlist/CqsEgL8-xD9TB6yWywgs3dFzvsnlcPylOmRBY9Tr9UJEns2wMeMupnxPsw9GqJU6L4zYfZ31xrrsBGjp5XUo3MwWgoTAl4FoM2BNnEASv4fDYfzca48ojaJHHPJxO0D3oH_0iR81PoLF2awFiF37c4KIwaTORW4134XC-KUXJYzC8Vj70_GA6YrkRtsYLXxdqmP4HKF87zn2eegY_LVk7oQiRca4PVqiIgpM7NSNFeCPylySgncrb9p6XZvQsVZ8J0CFB76OZ9x0O3mYGIHN3M_kBYNoPS0GTWnrkf2CYts1BwrW-tfTXmaSH8Gao_FX2Hp7k_rxqlUUFykmnZ0GCJmdkyeX2ZULcNiy94yA_0ZOG-xLyucShlewxB6Xmr6UxxH38w8eTJK-nGI3rE3K-pFDj18P7OGfJBryyRLwC5qpn9LQ2D_HYASkCB6G-lhnDx4IrkabSr3xsKTMYhqr6IXsB5FstZfBMujVz5lifTqrG9YBwmKQfY2sAuR3jxzwPHCelklRgNoS2SW5GVXCu6Us1CMtTUXIV8Y5uO7I1rLbon8J78O3U2tdYtYMXpZTcNZrRrdWq98hgBbQXRQFSIDE-rTD8EGrsg60pqk8UEg8qNMvJEJ6PluwGIYYeipArKQi2ei-I3IFvzBSKIYQFgGuBh1GrvXquZWhqlZ3JKm2FLcdl7-0Kv0kmpKWlQXOTN-e2e5JgVmLw7t5agAhpKdwF7WJwDh0iUSAjoy3Ggytrdv2-Jh7L1d1VrwgASoJdXMtd2VzdC0yMPUD.m3u8";
let woowakgood_url = "chrome-extension://emnphkkblegpebimobpbekeedfgemhof/player.html#https://video-weaver.fra05.hls.ttvnw.net/v1/playlist/CqIENVDLaiEe_OIww2Y_UfMwheFBCOmHkGI9A7LJaeTaTEVl_yPfJf4OQtmjYASv5fxnf3w5ayo151hJYjb1f3_OIahsoh9DkYUe7DrH7IAinl3W4LDGyVKRywfJlcxePWr4xCUQzbC6DrutagHvNynNFGSwGmOsAXVjZNR9jmuo9ZdeZy_Y_X34xwAq5K8NlGRotpbC60XfxWrs6O1L6P1KSKZPww-LKjus0nhcHiIJvr_v1diMNQe2bMlIZ0RYvwPwiafSXzSuO2hcB3C6E0InmAHT9HlkcJeeKkkCsp2hDKgEQ3BMnPU29Sg_d8WpaK54bhzLCQb1tuLjK34Z06VmGEXxQOmmGF_upFPvlqstq2HunP2-Cbqap_Po5EDHZu1gmYh1Md0CXeEw4HnvRpn8FOCMxWANhnsCOTLzsF6M5lKpjmEFFIFQET9XmB0l5WqgFXmHh0Az-7ua2C5TqARbnp2VBvGa-oTUxhYWK2lD22Yot6D8OaV4ophaVcAdKEvDipHle-k7-QmXz__EaExComnxerA6nOhFKPtQqeue0vT_eDP3a8IypPwWOhcYZ3S8CbqoMIuuLpxOXt4uGlIkdJuAuGGWPtVXlz04Y5l_FU8sR8NhAwVo-UWnPF7N44YGPtic9dG1t82k3_2PuVU0hcDEodi0cu7iei8Q20SIxJFzD_kIB_Hve4Wx5SWl6_0HXv8RQk0Un4unnyXREDpEfgPhGgwbLX9KDmjsejCANVkgASoJdXMtd2VzdC0yMPUD.m3u8";
let lilpaaaaaa_url = "chrome-extension://emnphkkblegpebimobpbekeedfgemhof/player.html#https://video-weaver.fra05.hls.ttvnw.net/v1/playlist/CqYETZj8vZC4ylgBYmcxZ9nOnhWII6s0hu31zl39cO1kdqXMJhY-Eg7epbw64AK_n8yeSi4_j3FBJY9uT6FPuL346vuHbnywx_LMqpA5sjavHPPgVSrYYtHk2bdam1VzpHcSihcW88785qOIWn0u20zfrFimKx42YSUwXu3cP9hO5xmBKXyBcPC9YIdW7F5bik5qsxHeU4Yqj_Aqu02Y-5mHXd4U3fJziaFjccYyz6CrTabbd4T4IvFArrRCu45GoHwb1oXU21pajtsbb-4hlsgTmntfvTcebO8wfFwjJupYB7TnZl25pPM7BB8efglGgcSfAkwV5sPPShS-hY402GgHdRos1EmhTIru_bN_qcTPCIxhXEaTVvkd6EJjD6w6Yb_l2DnI_p_oYGg9pvRWN5PW7tlDKH3oeOspB_O2GxiK5qx-fdgTwB5U6xkhYqgSa2_sOj49BFzlOmN4UG5KLDUoHD_aoJskc-sNMFR70cu-4lFgCsCXUbQc9VqxjGghvzRzDdLk4VqCwxC_7eojkbvMUjnG0CnRYqAgYwIbBQsxk-j_caRkuWoB2k6NcXZ3__UV--G37YOAcvf_sdA3zWsc6ZuelHSnA40Z_hu6Rd8p6dE6Lcx7MdL2nrNYhIos4WVI1EM7u5ZJISWmueJ7VHz6dswYu69Oeiz_SilE0U8XjLhPcpMyiYKPYpmc4YY8_1osv6ge8KAHBkDeccBQ1_kR7JjGvWbUzBoMWmiu7V_4t6qdODXMIAEqCXVzLXdlc3QtMjD1Aw.m3u8";
let cotton__123_url = "chrome-extension://emnphkkblegpebimobpbekeedfgemhof/player.html#https://video-weaver.fra05.hls.ttvnw.net/v1/playlist/CqgEF0SQHF5sDwP0cbKS0r5bcs3wTUwkNPf_uyEEzHRr1vseDIGatEOWSUMGrCLlOeLDXJD172XVjTdHnNYQyw0hqNqF1QpKatXU3dUmPCzH5sUrn_h8jHlSixf5YVyQikWwvmZRs0wjCQArSoUDbhQ5AxfyHb_Iu45oiya_I576kgrK6b17oEKSbB2Vl6rZjIpG1uYwIUaaYMUPCVqJsEZzu1x1aFqHU6_8xzlThaUPl3xDuBAaI7paiQNcsT1aisIyNeVdUvuRiN3u30K3o09CzphFCvr-NXOlpD-jjfcAQ0f1dR7q0NXqyZCsSrQ5DqQq-ddvPT6gVDur7fCLpykuK_SUKhIwXyk4JOQX4ZdB_cL3nOkJlyrqH-JaOFKxMU_35mQByiEEHvigkh56ozB2gSXRKgz7iEkWpx8dwFJx1xq839btKjMEfbD0b3Zie2S43k-sq_6zqP1vXGjJUawrMhBdRV-cqQY2X0N0DJQBSM35nV8wSAo72QxqfTn5OhABHq_M7r9tyQbFL8KyoklIKv6cqMPCYeEWtac6Devt3QlFYFhxYwS6A0e4YQDZNhFR-lhgSjQT9_PYntPNouqLOUrUJ3TGa-n0I_5dDsLd7Sx9esBqgn22rLArs6cnQ9m85rwOQ-9BZxPKX55pvLsAFHgRStD53mGVaiP_meW6TEqL4Mbf5qHYIEJTe35deLzBUjWCvS8lWuEpvsFSbfHbVHQjlyRW3fFQGgxnqBuME1g6IVSOTvkgASoJdXMtd2VzdC0yMPUD.m3u8";
let jingburger_url = "chrome-extension://emnphkkblegpebimobpbekeedfgemhof/player.html#https://video-weaver.fra05.hls.ttvnw.net/v1/playlist/CqUEWuv5_cfDXxiCeCmmIY5Gx_Q_foM_EsAyF0fsbzIehnRiWE50rQL-VtbRDmzmdJdla2oXvnsXiyRvrVh7dSfipD4AeirHCdvBFJ2dv59GgcAsQgd72JHb4-9XZl-GZq0moQhEQCsvuOGQsnZLNQ_s5HSLyYWjlttZeMODy-nf4i0b2XvJK9ybIeNAvB11Jt8udTF3wd-mt-6Bww0r7MAZlrEpAE1FKx26BmNCO9UDFs8G-1QKFuQqZ_znGdMS43yeLiwK783yOG8Y6aLod1xA84wWKvmQlmrogJtnc46W6zCds_SuM2Ziq9If8q2NWlTtWxInImi89akL07MSDL2WKuIREFl0B81J0yl6uY-w1teEx5IYFXjIOd5klvlxtBCW1NhXyHole-UMRTdh_cVIGVtrheIrzgBSfXviJFWItLmwYlVpAajm98YcdcpHVxsheF8eWt-1dypnxdzMJX8oHbu0aTfK1B1C3FRHb-SxGPN-yhHEVhnAk4a_mmdakIihzz9onkymeCcy-vgOpGLL3j0xyI6L3ttwoQHZqBxSP_zEbevxxOsOAeC-UuY-P3T54-231x_1ufvZpZkoB7YGFCy7JzEgHN6-qvGI8tpkVwFCIhp9fFNmiU1q3R16RwH9KOCaQsCfE2xvJoeZuQQcVH290nNulBTztBQjTGDQ3McRpuxUMp53ONvkbY6zi5jIwZrXD9pmOm_enOQZWtmF4PjfDznoGgyW5QTmMjpa031hNEQgASoJdXMtd2VzdC0yMPUD.m3u8";
let vo_ine_url = "";
let gosegugosegu_url = "";
let viichan6_url = "";
let chunyangkr_url = "chrome-extension://emnphkkblegpebimobpbekeedfgemhof/player.html#https://video-weaver.sel03.hls.ttvnw.net/v1/playlist/Cr0Ft-omPAY8Cx51AXGwYew2fpLk-jkCBYT_fbl4sQkuJ9nOrJIhaNFx4_gZzGKCWFBLtbvaiDmxp3E9PT50OOq2GtQpDsSdQG3HVViUtvqAudIelV-yhFa0i08Fz2gE1aJtj5pU6EnMfCmjrePDNc8XnQsL4_dkKx6B-6aOpXh1hLDv70FVkOxHbi_jrlA8rEP5XDVFSBxFwBi6y2VuVbcXZ2zKTJT4g24Gmf2rW5DMsxAYLaasq2HYbC24QbpvIDAZwG1FdVDi3bzZepAW2oT4TFF6APP60vI28j7DnLUYP4m_bmn_cXw6VSUPjKfCJsB63lZ5AwH9QVNVLahj-Mwp4f0ehpyQbNVaFbX2SK7_MatkCdBNLbsm-m3NPC2GcVNgfaDDh3j4sFLCJNmJ1v2GgA_PloE2B_GTTL2ILr9yFfqh-11AEev8X45df8shnQvOuLbxa3b6aMTaIha-e8CG17RaMmKWCNTQaPkl3TMHHVvs6kD6peMRjpQueF3hhNfLPmZPfYoSuRyBgAsYtaZVm_oWhScbv3lnAM17l_8ZHuHuzaR571wUAOrUeLBU9OP0wddWAGUyUeAFtMVyn2E4LlBoafopqcrDcwB9sQe4tAit59cIMeB4NCBcA4a6EsVl2K2bZ5lRecXzQ_qi-hNrk7yKNTWgkOtWT-qdwQWuixcdcmmJpxjGKP80MTLeecsnjEwyqNceMIiMmvlQUnGpG-TLOXskdNZ6Vj2JTyHrRWmh8O0spe9IjA9Q5knsKfnwb6VorcWi053kf2MjuQMTfJz6KwKxdiEAH-xJc6kh0_E8kwQ_uO3DkRohQya_VVj2d7WF4wA1IRX0Yi_wYHO4zRpLzh_R_CKLUStajWb_HPxiJeibImb54Ih3_6Sf7sdSyINdMtiQt78nJIlMfBjvD-1XHBFUvO1a2l-thtIaDPnrOH_iQCpqLpJjOCABKgl1cy13ZXN0LTIw9gM.m3u8";
let saddummy_url = "chrome-extension://emnphkkblegpebimobpbekeedfgemhof/player.html#https://video-weaver.fra05.hls.ttvnw.net/v1/playlist/CpwEHQ0atFhGyeEFXcP2Xh8QqZYW-obFx_OaN0S-PeomwvNNNcuwLXooXQI3cr6VpZBx4uNJtVB3h75Jgl-3grAiDtUBsSK4qMlq4EJsHqlVoQjM1uQ66YWH885V_lMSN5XWIgb_AeadE_gT9Z1ibqKk4BOO_wmoG4elRxz7nMBHkbT7MoVU8WGsaPq7eqz-drq652wdQwnEorboHYo7iCJ3sFoBnNb7HF8030mLna2nbI7TdPepkQX27EqQscqMrwWeVkBFCBIQQNmha4Nhjyk3LO1EC4L8S8CFD8GvKGtQNv0or-Sl3E2eVrE9An4o7HjY9Gd9WZQs85m7fxaz5jlP0u6d_6dzRcxeED_dQpyPbFShhvAfL9IrVzYdv4SvrR048UVYiFBDAts74T234feMp3FJZq4ufxGntO4_Loln9Q6MnL7NDBtZ9ag6ey45-MbeLBa_SLkq955nwehXRPt0FsjosRlfz4AQysGGtJrhiSPIGljM-FzzvQmAUrm6_njaYAAazw1rc2o4cslEkCYM52Ow_Zc37_tkkJU5CVMDZBL1Sb8Gn-5WpivgwXZLNsrHIpxMWsRMEufkbLg2O5G4FQP55EyWtmrVRNcpQrjGX7f1X2RzG8NFO5LfD0suHYyosq-YWK5MYrKBqLcTa3HajrmONmp4l6M0kbr2k1i7aHsh1DMN-ClBsjaVQx2PIdMRHc_LN9hT30A298t7Ggztj_Vq09ZdGWfCckogASoJdXMtd2VzdC0yMPUD.m3u8";
let nokduro_url = "";
let chamcham2_url = "";
let roentgenium_url = "chrome-extension://emnphkkblegpebimobpbekeedfgemhof/player.html#https://video-weaver.fra05.hls.ttvnw.net/v1/playlist/CrEEbsOb_l4Og2Fj4VCQfbmKqi6daqNy2s4LLq3pkdfABM1e0jmZQhliHN6Owhh0t7lkb15TLYJM1UrJlKAXKSmCdkMmSjPvLSitoS1ZNyW3fy799GuXj0YM-KZW0SPAK_CnMP1Kp5wlf5c2xzAxwEh2b4hgIgLxDG9Cved7K1vL7om73En6aqdTl1x-o1w4DULHj1R6MD3l_ETFxIhMSX9lGk8O8w_tEJauuTbM-QjfrxHIlLazDiqZYrDg5HR6Xx4ZtV4SOutIqqt9SeckJlGdm0pdffUbr6S4ZT2WgaveVQBK0_y90M8xSdXpBVMWXVQdXGNypR1jiSmbLac6rbP-geCAvO72ilWAlyjdWod5Z7JcwIvM-64574Pxm4jAOTZEaKPvB8FWLmMF6r1gB3SoiKWocrxKo64bI2x01uYBB6eSTbqca-1Nk6VHR5Ko3xBXeLAUQfoZaizvhhOOzkfGWWZlipv8Hg_WTu2uznNw-3XGmTy8U3BlNSdNqEy_rl6qJ-0okfwM_z36bWZsacppsYqFDWPGImEASlXyYiCKIFpMQEPP9KdQddzj0fKdknvOxWNXy5dOqqatVhNwSqgLWrgzGyFBfFx3XCs8kvZywhQXuDuZlDxY6BWFCnir_lnhz7rUE7INgCY3phGeMTviiA-BoA52MrMP_DCAg5_Pc8IzFTC3ZXLlKlD4aevcsD_xKqJybSqeXkX_yI91u85_RP7ANQvEnyWbCr1KK8ViLhXRGgzvytPk6fTZbJumVMQgASoJdXMtd2VzdC0yMPUD.m3u8";

// 풍월량

hanryang1125_live.addEventListener('click', function() {
    hanryang1125_live.classList.toggle('hidden');
    hanryang1125_off.classList.toggle('hidden');
    hanryang1125_off.classList.toggle('playing');
    hanryang1125_refresh.classList.toggle('hide');
    $('.ttvhanryang1125-twitch .viewer_count').attr("class", "viewer_count hidden");
    // $('.stream-container .image').attr("class", "image on-click");
    $('.iframe.ttvhanryang1125').append('<iframe id="ttvhanryang1125-m3u8" src="' + hanryang1125_url + '" allow="autoplay"></iframe>');
    $('.ttvhanryang1125-twitch .image .iframe iframe').attr("class", "view-iframe");
});

hanryang1125_off.addEventListener('click', function() {
    hanryang1125_live.classList.toggle('hidden');
    hanryang1125_off.classList.toggle('hidden');
    hanryang1125_off.classList.toggle('playing');
    hanryang1125_refresh.classList.toggle('hide');
    $('.ttvhanryang1125-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvhanryang1125-twitch .image .iframe iframe').attr("class", "");
    $(".ttvhanryang1125-twitch iframe").remove();
    $('.ttvhanryang1125-twitch .image').attr("class", "image");
});

hanryang1125_refresh.addEventListener('click', function() {
    $(".ttvhanryang1125-twitch iframe").remove();
    $('.iframe.ttvhanryang1125').append('<iframe id="ttvhanryang1125-m3u8" src="' + hanryang1125_url + '" allow="autoplay"></iframe>');
    $('.ttvhanryang1125-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 우왁굳

woowakgood_live.addEventListener('click', function() {
    woowakgood_live.classList.toggle('hidden');
    woowakgood_off.classList.toggle('hidden');
    woowakgood_off.classList.toggle('playing');
    woowakgood_refresh.classList.toggle('hide');
    $('.ttvwoowakgood-twitch .viewer_count').attr("class", "viewer_count hidden");
    // $('.stream-container .image').attr("class", "image on-click");
    $('.iframe.ttvwoowakgood').append('<iframe id="ttvwoowakgood-m3u8" src="' + woowakgood_url + '" allow="autoplay"></iframe>');
    $('.ttvwoowakgood-twitch .image .iframe iframe').attr("class", "view-iframe");
});

woowakgood_off.addEventListener('click', function() {
    woowakgood_live.classList.toggle('hidden');
    woowakgood_off.classList.toggle('hidden');
    woowakgood_off.classList.toggle('playing');
    woowakgood_refresh.classList.toggle('hide');
    $('.ttvwoowakgood-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvwoowakgood-twitch .image .iframe iframe').attr("class", "");
    $(".ttvwoowakgood-twitch iframe").remove();
    $('.ttvwoowakgood-twitch .image').attr("class", "image");
});

woowakgood_refresh.addEventListener('click', function() {
    $(".ttvwoowakgood-twitch iframe").remove();
    $('.iframe.ttvwoowakgood').append('<iframe id="ttvwoowakgood-m3u8" src="' + woowakgood_url + '" allow="autoplay"></iframe>');
    $('.ttvwoowakgood-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 릴파

lilpaaaaaa_live.addEventListener('click', function() {
    lilpaaaaaa_live.classList.toggle('hidden');
    lilpaaaaaa_off.classList.toggle('hidden');
    lilpaaaaaa_off.classList.toggle('playing');
    lilpaaaaaa_refresh.classList.toggle('hide');
    $('.ttvlilpaaaaaa-twitch .viewer_count').attr("class", "viewer_count hidden");
    // $('.stream-container .image').attr("class", "image on-click");
    $('.iframe.ttvlilpaaaaaa').append('<iframe id="ttvlilpaaaaaa-m3u8" src="' + lilpaaaaaa_url + '" allow="autoplay"></iframe>');
    $('.ttvlilpaaaaaa-twitch .image .iframe iframe').attr("class", "view-iframe");
});

lilpaaaaaa_off.addEventListener('click', function() {
    lilpaaaaaa_live.classList.toggle('hidden');
    lilpaaaaaa_off.classList.toggle('hidden');
    lilpaaaaaa_off.classList.toggle('playing');
    lilpaaaaaa_refresh.classList.toggle('hide');
    $('.ttvlilpaaaaaa-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvlilpaaaaaa-twitch .image .iframe iframe').attr("class", "");
    $(".ttvlilpaaaaaa-twitch iframe").remove();
    $('.ttvlilpaaaaaa-twitch .image').attr("class", "image");
});

lilpaaaaaa_refresh.addEventListener('click', function() {
    $(".ttvlilpaaaaaa-twitch iframe").remove();
    $('.iframe.ttvlilpaaaaaa').append('<iframe id="ttvlilpaaaaaa-m3u8" src="' + lilpaaaaaa_url + '" allow="autoplay"></iframe>');
    $('.ttvlilpaaaaaa-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 주르르

cotton__123_live.addEventListener('click', function() {
    cotton__123_live.classList.toggle('hidden');
    cotton__123_off.classList.toggle('hidden');
    cotton__123_off.classList.toggle('playing');
    cotton__123_refresh.classList.toggle('hide');
    $('.ttvcotton__123-twitch .viewer_count').attr("class", "viewer_count hidden");
    // $('.stream-container .image').attr("class", "image on-click");
    $('.iframe.ttvcotton__123').append('<iframe id="ttvcotton__123-m3u8" src="' + cotton__123_url + '" allow="autoplay"></iframe>');
    $('.ttvcotton__123-twitch .image .iframe iframe').attr("class", "view-iframe");
});

cotton__123_off.addEventListener('click', function() {
    cotton__123_live.classList.toggle('hidden');
    cotton__123_off.classList.toggle('hidden');
    cotton__123_off.classList.toggle('playing');
    cotton__123_refresh.classList.toggle('hide');
    $('.ttvcotton__123-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvcotton__123-twitch .image .iframe iframe').attr("class", "");
    $(".ttvcotton__123-twitch iframe").remove();
    $('.ttvcotton__123-twitch .image').attr("class", "image");
});

cotton__123_refresh.addEventListener('click', function() {
    $(".ttvcotton__123-twitch iframe").remove();
    $('.iframe.ttvcotton__123').append('<iframe id="ttvcotton__123-m3u8" src="' + cotton__123_url + '" allow="autoplay"></iframe>');
    $('.ttvcotton__123-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 징버거

jingburger_live.addEventListener('click', function() {
    jingburger_live.classList.toggle('hidden');
    jingburger_off.classList.toggle('hidden');
    jingburger_off.classList.toggle('playing');
    jingburger_refresh.classList.toggle('hide');
    $('.ttvjingburger-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttvjingburger').append('<iframe id="ttvjingburger-m3u8" src="' + jingburger_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttvjingburger-twitch .image .iframe iframe').attr("class", "view-iframe");
});

jingburger_off.addEventListener('click', function() {
    jingburger_live.classList.toggle('hidden');
    jingburger_off.classList.toggle('hidden');
    jingburger_off.classList.toggle('playing');
    jingburger_refresh.classList.toggle('hide');
    $('.ttvjingburger-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvjingburger-twitch .image .iframe iframe').attr("class", "");
    $(".ttvjingburger-twitch iframe").remove();
    $('.ttvjingburger-twitch .image').attr("class", "image");
});

jingburger_refresh.addEventListener('click', function() {
    $(".ttvjingburger-twitch iframe").remove();
    $('.iframe.ttvjingburger').append('<iframe id="ttvjingburger-m3u8" src="' + jingburger_url + '" allow="autoplay"></iframe>');
    $('.ttvjingburger-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 아이네

vo_ine_live.addEventListener('click', function() {
    vo_ine_live.classList.toggle('hidden');
    vo_ine_off.classList.toggle('hidden');
    vo_ine_off.classList.toggle('playing');
    vo_ine_refresh.classList.toggle('hide');
    $('.ttvvo_ine-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttvvo_ine').append('<iframe id="ttvvo_ine-m3u8" src="' + vo_ine_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttvvo_ine-twitch .image .iframe iframe').attr("class", "view-iframe");
});

vo_ine_off.addEventListener('click', function() {
    vo_ine_live.classList.toggle('hidden');
    vo_ine_off.classList.toggle('hidden');
    vo_ine_off.classList.toggle('playing');
    vo_ine_refresh.classList.toggle('hide');
    $('.ttvvo_ine-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvvo_ine-twitch .image .iframe iframe').attr("class", "");
    $(".ttvvo_ine-twitch iframe").remove();
    $('.ttvvo_ine-twitch .image').attr("class", "image");
});

vo_ine_refresh.addEventListener('click', function() {
    $(".ttvvo_ine-twitch iframe").remove();
    $('.iframe.ttvvo_ine').append('<iframe id="ttvvo_ine-m3u8" src="' + vo_ine_url + '" allow="autoplay"></iframe>');
    $('.ttvvo_ine-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 고세구

gosegugosegu_live.addEventListener('click', function() {
    gosegugosegu_live.classList.toggle('hidden');
    gosegugosegu_off.classList.toggle('hidden');
    gosegugosegu_off.classList.toggle('playing');
    gosegugosegu_refresh.classList.toggle('hide');
    $('.ttvgosegugosegu-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttvgosegugosegu').append('<iframe id="ttvgosegugosegu-m3u8" src="' + gosegugosegu_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttvgosegugosegu-twitch .image .iframe iframe').attr("class", "view-iframe");
});

gosegugosegu_off.addEventListener('click', function() {
    gosegugosegu_live.classList.toggle('hidden');
    gosegugosegu_off.classList.toggle('hidden');
    gosegugosegu_off.classList.toggle('playing');
    gosegugosegu_refresh.classList.toggle('hide');
    $('.ttvgosegugosegu-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvgosegugosegu-twitch .image .iframe iframe').attr("class", "");
    $(".ttvgosegugosegu-twitch iframe").remove();
    $('.ttvgosegugosegu-twitch .image').attr("class", "image");
});

gosegugosegu_refresh.addEventListener('click', function() {
    $(".ttvgosegugosegu-twitch iframe").remove();
    $('.iframe.ttvgosegugosegu').append('<iframe id="ttvgosegugosegu-m3u8" src="' + gosegugosegu_url + '" allow="autoplay"></iframe>');
    $('.ttvgosegugosegu-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 비챤

viichan6_live.addEventListener('click', function() {
    viichan6_live.classList.toggle('hidden');
    viichan6_off.classList.toggle('hidden');
    viichan6_off.classList.toggle('playing');
    viichan6_refresh.classList.toggle('hide');
    $('.ttvviichan6-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttvviichan6').append('<iframe id="ttvviichan6-m3u8" src="' + viichan6_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttvviichan6-twitch .image .iframe iframe').attr("class", "view-iframe");
});

viichan6_off.addEventListener('click', function() {
    viichan6_live.classList.toggle('hidden');
    viichan6_off.classList.toggle('hidden');
    viichan6_off.classList.toggle('playing');
    viichan6_refresh.classList.toggle('hide');
    $('.ttvviichan6-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvviichan6-twitch .image .iframe iframe').attr("class", "");
    $(".ttvviichan6-twitch iframe").remove();
    $('.ttvviichan6-twitch .image').attr("class", "image");
});

viichan6_refresh.addEventListener('click', function() {
    $(".ttvviichan6-twitch iframe").remove();
    $('.iframe.ttvviichan6').append('<iframe id="ttvviichan6-m3u8" src="' + viichan6_url + '" allow="autoplay"></iframe>');
    $('.ttvviichan6-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 천양

chunyangkr_live.addEventListener('click', function() {
    chunyangkr_live.classList.toggle('hidden');
    chunyangkr_off.classList.toggle('hidden');
    chunyangkr_off.classList.toggle('playing');
    chunyangkr_refresh.classList.toggle('hide');
    $('.ttvchunyangkr-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttvchunyangkr').append('<iframe id="ttvchunyangkr-m3u8" src="' + chunyangkr_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttvchunyangkr-twitch .image .iframe iframe').attr("class", "view-iframe");
});

chunyangkr_off.addEventListener('click', function() {
    chunyangkr_live.classList.toggle('hidden');
    chunyangkr_off.classList.toggle('hidden');
    chunyangkr_off.classList.toggle('playing');
    chunyangkr_refresh.classList.toggle('hide');
    $('.ttvchunyangkr-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvchunyangkr-twitch .image .iframe iframe').attr("class", "");
    $(".ttvchunyangkr-twitch iframe").remove();
    $('.ttvchunyangkr-twitch .image').attr("class", "image");
});

chunyangkr_refresh.addEventListener('click', function() {
    $(".ttvchunyangkr-twitch iframe").remove();
    $('.iframe.ttvchunyangkr').append('<iframe id="ttvchunyangkr-m3u8" src="' + chunyangkr_url + '" allow="autoplay"></iframe>');
    $('.ttvchunyangkr-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 서새봄

saddummy_live.addEventListener('click', function() {
    saddummy_live.classList.toggle('hidden');
    saddummy_off.classList.toggle('hidden');
    saddummy_off.classList.toggle('playing');
    saddummy_refresh.classList.toggle('hide');
    $('.ttvsaddummy-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttvsaddummy').append('<iframe id="ttvsaddummy-m3u8" src="' + saddummy_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttvsaddummy-twitch .image .iframe iframe').attr("class", "view-iframe");
});

saddummy_off.addEventListener('click', function() {
    saddummy_live.classList.toggle('hidden');
    saddummy_off.classList.toggle('hidden');
    saddummy_off.classList.toggle('playing');
    saddummy_refresh.classList.toggle('hide');
    $('.ttvsaddummy-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvsaddummy-twitch .image .iframe iframe').attr("class", "");
    $(".ttvsaddummy-twitch iframe").remove();
    $('.ttvsaddummy-twitch .image').attr("class", "image");
});

saddummy_refresh.addEventListener('click', function() {
    $(".ttvsaddummy-twitch iframe").remove();
    $('.iframe.ttvsaddummy').append('<iframe id="ttvsaddummy-m3u8" src="' + saddummy_url + '" allow="autoplay"></iframe>');
    $('.ttvsaddummy-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 녹두로

nokduro_live.addEventListener('click', function() {
    nokduro_live.classList.toggle('hidden');
    nokduro_off.classList.toggle('hidden');
    nokduro_off.classList.toggle('playing');
    nokduro_refresh.classList.toggle('hide');
    $('.ttvnokduro-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttvnokduro').append('<iframe id="ttvnokduro-m3u8" src="' + nokduro_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttvnokduro-twitch .image .iframe iframe').attr("class", "view-iframe");
});

nokduro_off.addEventListener('click', function() {
    nokduro_live.classList.toggle('hidden');
    nokduro_off.classList.toggle('hidden');
    nokduro_off.classList.toggle('playing');
    nokduro_refresh.classList.toggle('hide');
    $('.ttvnokduro-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttvnokduro-twitch .image .iframe iframe').attr("class", "");
    $(".ttvnokduro-twitch iframe").remove();
    $('.ttvnokduro-twitch .image').attr("class", "image");
});

nokduro_refresh.addEventListener('click', function() {
    $(".ttvnokduro-twitch iframe").remove();
    $('.iframe.ttvnokduro').append('<iframe id="ttvnokduro-m3u8" src="' + nokduro_url + '" allow="autoplay"></iframe>');
    $('.ttvnokduro-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 뢴트게늄

roentgenium_live.addEventListener('click', function() {
    roentgenium_live.classList.toggle('hidden');
    roentgenium_off.classList.toggle('hidden');
    roentgenium_off.classList.toggle('playing');
    roentgenium_refresh.classList.toggle('hide');
    $('.ttv111roentgenium-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttv111roentgenium').append('<iframe id="ttv111roentgenium-m3u8" src="' + roentgenium_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttv111roentgenium-twitch .image .iframe iframe').attr("class", "view-iframe");
});

roentgenium_off.addEventListener('click', function() {
    roentgenium_live.classList.toggle('hidden');
    roentgenium_off.classList.toggle('hidden');
    roentgenium_off.classList.toggle('playing');
    roentgenium_refresh.classList.toggle('hide');
    $('.ttv111roentgenium-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttv111roentgenium-twitch .image .iframe iframe').attr("class", "");
    $(".ttv111roentgenium-twitch iframe").remove();
    $('.ttv111roentgenium-twitch .image').attr("class", "image");
});

roentgenium_refresh.addEventListener('click', function() {
    $(".ttv111roentgenium-twitch iframe").remove();
    $('.iframe.ttv111roentgenium').append('<iframe id="ttv111roentgenium-m3u8" src="' + roentgenium_url + '" allow="autoplay"></iframe>');
    $('.ttv111roentgenium-twitch .image .iframe iframe').attr("class", "view-iframe");
});

// 탬탬버린

chamcham2_live.addEventListener('click', function() {
    chamcham2_live.classList.toggle('hidden');
    chamcham2_off.classList.toggle('hidden');
    chamcham2_off.classList.toggle('playing');
    chamcham2_refresh.classList.toggle('hide');
    $('.ttv2chamcham2-twitch .viewer_count').attr("class", "viewer_count hidden");
    $('.iframe.ttv2chamcham2').append('<iframe id="ttv2chamcham2-m3u8" src="' + chamcham2_url + '" allow="autoplay"></iframe>');
    // $('.stream-container .image').attr("class", "image on-click");
    $('.ttv2chamcham2-twitch .image .iframe iframe').attr("class", "view-iframe");
});

chamcham2_off.addEventListener('click', function() {
    chamcham2_live.classList.toggle('hidden');
    chamcham2_off.classList.toggle('hidden');
    chamcham2_off.classList.toggle('playing');
    chamcham2_refresh.classList.toggle('hide');
    $('.ttv2chamcham2-twitch .viewer_count').attr("class", "viewer_count");
    $('.ttv2chamcham2-twitch .image .iframe iframe').attr("class", "");
    $(".ttv2chamcham2-twitch iframe").remove();
    $('.ttv2chamcham2-twitch .image').attr("class", "image");
});

chamcham2_refresh.addEventListener('click', function() {
    $(".ttv2chamcham2-twitch iframe").remove();
    $('.iframe.ttv2chamcham2').append('<iframe id="ttv2chamcham2-m3u8" src="' + chamcham2_url + '" allow="autoplay"></iframe>');
    $('.ttv2chamcham2-twitch .image .iframe iframe').attr("class", "view-iframe");
});

let prewoowakgood = "https://static-cdn.jtvnw.net/previews-ttv/live_user_woowakgood-1280x720.jpg" + "?";
let prevo_ine = "https://static-cdn.jtvnw.net/previews-ttv/live_user_vo_ine-1280x720.jpg" + "?";
let prejingburger = "https://static-cdn.jtvnw.net/previews-ttv/live_user_jingburger-1280x720.jpg" + "?";
let prelilpaaaaaa = "https://static-cdn.jtvnw.net/previews-ttv/live_user_lilpaaaaaa-1280x720.jpg" + "?";
let precotton__123 = "https://static-cdn.jtvnw.net/previews-ttv/live_user_cotton__123-1280x720.jpg" + "?";
let pregosegugosegu = "https://static-cdn.jtvnw.net/previews-ttv/live_user_gosegugosegu-1280x720.jpg" + "?";
let previichan6 = "https://static-cdn.jtvnw.net/previews-ttv/live_user_viichan6-1280x720.jpg" + "?";
let pre111roentgenium = "https://static-cdn.jtvnw.net/previews-ttv/live_user_111roentgenium-1280x720.jpg" + "?";
let prechunyangkr = "https://static-cdn.jtvnw.net/previews-ttv/live_user_chunyangkr-1280x720.jpg" + "?";
let prehanryang1125 = "https://static-cdn.jtvnw.net/previews-ttv/live_user_hanryang1125-1280x720.jpg" + "?";
let presaddummy = "https://static-cdn.jtvnw.net/previews-ttv/live_user_saddummy-1280x720.jpg" + "?";
let prenokduro = "https://static-cdn.jtvnw.net/previews-ttv/live_user_nokduro-1280x720.jpg" + "?";
let pre2chamcham2 = "https://static-cdn.jtvnw.net/previews-ttv/live_user_2chamcham2-1280x720.jpg" + "?";

window.addEventListener('load', function() {

    playAlert = setInterval(function() {
        let newtime = new Date().getTime();
        $('#preview-woowakgood').attr('src', prewoowakgood + newtime);
        $('#preview-vo_ine').attr('src', prevo_ine + newtime);
        $('#preview-jingburger').attr('src', prejingburger + newtime);
        $('#preview-lilpaaaaaa').attr('src', prelilpaaaaaa + newtime);
        $('#preview-cotton__123').attr('src', precotton__123 + newtime);
        $('#preview-gosegugosegu').attr('src', pregosegugosegu + newtime);
        $('#preview-viichan6').attr('src', previichan6 + newtime);
        $('#preview-111roentgenium').attr('src', pre111roentgenium + newtime);
        $('#preview-chunyangkr').attr('src', prechunyangkr + newtime);
        $('#preview-hanryang1125').attr('src', prehanryang1125 + newtime);
        $('#preview-saddummy').attr('src', presaddummy + newtime);
        $('#preview-nokduro').attr('src', prenokduro + newtime);
        $('#preview-2chamcham2').attr('src', pre2chamcham2 + newtime);
    }, 60000);
})