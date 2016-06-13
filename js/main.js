/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.onload = function() {
    var textbox = document.getElementById('contents');

    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === 'back') {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {
            }
        }
    });

    textbox.addEventListener('click', function() {
        var box = document.getElementById('content_text');
        var img = document.getElementById('content_img');

        var req = new XMLHttpRequest();
        req.open('GET', 'http://vps238917.ovh.net/me?token=specialThanks', true);
        req.onreadystatechange = function (aEvt) {
          if (req.readyState == 4) {
             if(req.status == 200) {
            	 box.innerText = JSON.parse(req.response).total + '€';
            	 img.src = 'http://www.mad-computing.com' + JSON.parse(req.response).accountState;
             }
             else
              console.log("Erreur pendant le chargement de la page.\n");
          }
        };
        req.send(null);
    });
};
