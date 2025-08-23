var last_search;
var searcher_selected = false;

const backgroundImgContainer = document.getElementsByTagName("body");

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$("#searcherbox").keyup(function(){
  let text = $("#searcherbox").val();
  searcher_selected = false;
  if(last_search != text){
      last_search = text;
      $.get("https://ultratime.es/api/searchout/autocomplete.php?q="+text.toLowerCase(), function(data){
          $(".autocomplete-searchers").empty();
          let length = data.length;
          if(length != 0){
          data = JSON.parse(data);
          for(let item = 0; item <= length-1; item++){
              let name = data[item].charAt(0).toUpperCase() + data[item].slice(1);
              if(item == 0) $(".autocomplete-searchers").append("<li class='searcher-option'><a class='active' id='searcher-selector-a'>"+name+"</a></li>");
              else $(".autocomplete-searchers").append("<li class='searcher-option'><a id='searcher-selector-a'>"+name+"</a></li>");
          }
          }
      });
  }
});

$(".button-add-bookmark-modal").click(function(){
  let url = $(".add-bookmark-url").val();
  
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  $(".add-bookmark-url").val("");
  let ls_bookmarks = localStorage.getItem("bookmarks");
  if(ls_bookmarks != null){
    ls_bookmarks = JSON.parse(ls_bookmarks);
    ls_bookmarks.push(url);
    localStorage.setItem("bookmarks", JSON.stringify(ls_bookmarks));
    window.location.reload();
  }else{
    ls_bookmarks = [];
    ls_bookmarks.push(url);
    localStorage.setItem("bookmarks", JSON.stringify(ls_bookmarks));
    window.location.reload();
  }
});

$(document).on("keydown", function(e) {
  if (e.which == 40) {
    let active = $('.searcher-option').find("a.active");
    let storeTarget;
    if (active.length != 0) {
      active.removeClass("active");
      storeTarget = active.parent().next();
    } else {
      storeTarget = $('.searcher-option').first("li");
    }
    storeTarget.children().addClass("active");
  } 
  
  else if (e.which == 38) {
    let active = $('.searcher-option').find("a.active");
    let storeTarget;
    if (active.length != 0) {
      active.removeClass("active");
      storeTarget = active.parent().prev();
    } else {
      storeTarget = $('.searcher-option').last("li");
    }
    storeTarget.children().addClass("active");
  } 
  
  else if (e.which == 13){
      if(searcher_selected == false && $("#searcher") && $("#chat-text").val() == ""){
          selectSearcherAndMove(false, false);
      } else if(searcher_selected == true && $("#chat-text").val() == ""){
          search();
      }
  } 
  
  else if (e.which == 9){
      if(searcher_selected == false){
          selectSearcherAndMove(true, false);
      } else if(searcher_selected == true){
          search();
      }
  }
});

$(document).on("click", function(event) {
  let elemento = event.target;
  let id_searcher = elemento.id;
  let text_searcher = elemento.text;
  if(id_searcher == "searcher-selector-a"){
    searcher_selected = true;
    last_search = text_searcher;
    $("#searcherbox").val(text_searcher);
    $(".autocomplete-searchers").hide(250);
    $(".autocomplete-searchers").empty();
    $("#searchbox").select();
  }
});


addEventListener("click", function(){
	if($("#searcherbox").is(":focus") || $(".autocomplete-searchers").is(":focus")){
    searcher_selected = false;
		$(".autocomplete-searchers").show(250);
	}else if(!$(".autocomplete-searchers").is(":hover")){
		$(".autocomplete-searchers").hide(250);
	}
});

function selectSearcherAndMove(tab, click){
    searcher_selected = true;
    let selected;
    if(click == false) selected = $('.searcher-option').find("a.active").text();
    else selected = click;
    last_search = selected;
    $("#searcherbox").val(selected);
    $(".autocomplete-searchers").hide(250);
    $(".autocomplete-searchers").empty();
    if(tab == false) $("#searchbox").select();
}

$("#submit-button").click(function(){
    search();
});

function search(){
    setItem("time_saved", Number(getItem("time_saved")) + 3);
    let text = encodeURIComponent($("#searchbox").val().toLowerCase());
    $("#searchbox").val("");
    let id = encodeURIComponent($("#searcherbox").val().toLowerCase());
    $("#searcherbox").val("")
    $.get("https://ultratime.es/api/searchout/search.php?s="+id+"&q="+text, function(data){  
        data = JSON.parse(data);
        window.location.href = data;
    });
}







//SETTINGS
const theme = document.querySelector("#themeSelector");
const bg = document.querySelector("#random-bg");
const body = document.querySelector("body");

load();
loadbg();

theme.addEventListener('click', e => {
  body.classList.toggle('themeDark');
  store(body.classList.contains('themeDark'));
  load(); 
});

function load(){
  const themeDark = localStorage.getItem('themeDark');

  if(!themeDark){
    store('false');
  }else if(themeDark == 'true'){
    body.classList.add('themeDark');
  }
}

function loadbg(){
  const bgtheme = localStorage.getItem('bgtheme');

  if(!bgtheme){
    storebg('false');
    body.style.backgroundImage = "url('./static/images/bg-animate.svg')";
  }else if(bgtheme == 'true'){
    body.classList.add('random');
  }
}

if(!localStorage.getItem('bgtheme')) body.style.backgroundImage = "url('./static/images/bg-animate.svg')";;

function store(value){
  localStorage.setItem('themeDark', value);
}

function storebg(value){
  localStorage.setItem('bgtheme', value);
}
var getItem  = ((item) => {
  return localStorage.getItem(item);
});

var setItem = ((item, value) => {
  return localStorage.setItem(item, value);
});

function setSettings(){
  if(!getItem("clock")){
      setItem("clock", false);
      $("#clock_selector").prop("checked", false);
  }else if(getItem("clock") && getItem("clock") == "true"){
      $("#clock").show();
      startTime();
      $("#clock_selector").prop("checked", true);
  }else{
      $("#clock").hide();
      $("#clock_selector").prop("checked", false);
  }

  if(getItem("background") && getItem("background") != "false"){
      $("body").css("background-image","url('"+getItem("background")+"')");
      $("#options-button").css("color", "#fff");
      $("#options-button").css("text-shadow", "0 0 0");
      $("#options-reminders").css("color", "#fff");
      $("#options-reminders").css("text-shadow", "0 0 0");
      $("#time_saved").css("color", "#fff");
      $("#time_saved").css("text-shadow", "0 0 0");
      $("#search-text-logo").css("color", "#fff");
      $("#search-text-logo").css("text-shadow", "0 0 0");
      $("#clock").css("color", "#fff");
      $("#clock").css("text-shadow", "0 0 0");
      $("#background_url").val(getItem("background"));
      $("#search-trends").css("color", "#fff");
      $("#search-trends").css("text-shadow", "0 0 0");
  }else{
      $("body").css("background-image","url('./static/images/bg-animate.svg')");
  }

  if(getItem("searcher") && getItem("searcher") != "false"){
      searcher_selected = true;
      let selected = getItem("searcher").charAt(0).toUpperCase() + getItem("searcher").slice(1);
      last_search = selected
      $("#searcher_default-input").val(selected);
      $("#searcherbox").val(selected);
      $("#searchbox").select();
  }

  if(getItem("time_saved") && getItem("time_saved") != "0"){
    let seconds = Number(getItem("time_saved"));

    let s = (Math.round(seconds % 0x3C)).toString();
    let h    = (Math.floor(seconds / 0xE10)).toString();
    let m  = (Math.floor(seconds / 0x3C ) % 0x3C).toString();
              
    $("#time_saved").prop('title', `Ahorraste ${h} horas, ${m} minutos y ${s} segundos gracias a SearchOut.`);
  }else{
    setItem("time_saved", 0);
    $("#time_saved").prop('title', '¡Empieza a buscar para ahorrar tiempo!')
  }

  if(getItem("reminders") && getItem("reminders") != null && getItem("reminders") != "[]"){
    let items = JSON.parse(getItem("reminders"));

    for (i in items){
      let selectedDate = new Date(items[i][1]);
      let actualDate = new Date();
      let msDifference = selectedDate.getTime() - actualDate.getTime();
      let daysGone = Math.ceil(msDifference / (1000 * 60 * 60 * 24));    
      let color;
      if(daysGone > 2){
        color = "success";
      }else if(daysGone <= 2 && daysGone > 0){
        color = "warning";
      }else {
        color = "danger";
      }
      let textArray = ["Quedan", "días."];
      if(daysGone == 1){
        textArray = ["Queda", "día."];
      }

      let finalTitle = items[i][0].charAt(0).toUpperCase() + items[i][0].slice(1).toLowerCase();
      if (finalTitle.charAt(finalTitle.length - 1) !== ".") {
        finalTitle += ".";
      }

      $(".tab-content-reminders").append(`<div class="reminder-card mb-3">
      <h4 class="reminder-title-card">${finalTitle}</h4>
      <h5 class="reminder-time-card text-${color}">${textArray[0]} ${daysGone} ${textArray[1]}</h5>
      <span class="reminder-date-card">${items[i][1][2]}-${items[i][1][1]}-${items[i][1][0]}</span>
      <button class="select-reminder-complete" aria-element="${i}}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
      </button>
    </div>`);
    }
  }else{
    $(".tab-content-reminders").append(`<p class="text-center align-middle">Aún no tienes ningún recordatorio.</p>`)
  }
  if(getItem("bookmarks") && getItem("bookmarks") != null){
    let bookmarks = JSON.parse(getItem("bookmarks"));

    for (i in bookmarks){
      $(".bookmarks-container-div").append(`
      <div class="bookmark-item-div-add">
        <div class="bookmark-item-added">
          <a href="${bookmarks[i]}">
            <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=64&url=${bookmarks[i]}" height="40" width="40" style="margin-top: 5px"></img>
          </a>
          <div class="bookmark-item-delete" id="bookmark-${i}">&times;</div>
          </div>
      </div>`);
    }

    if(bookmarks.length <= 7){
      $(".bookmarks-container-div").append(`
        <div class="bookmark-item-div-add">
          <div class="bookmark-item">
            <button id="add-bookmark-button" class="text-light" data-toggle="modal" data-target="#addBookmarkModal">
              <svg class="add-bookmark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </button>
          </div>
        </div>`);
    }
  }else{
    $(".bookmarks-container-div").append(`
      <div class="bookmark-item-div-add">
        <div class="bookmark-item">
          <button id="add-bookmark-button" class="text-light" data-toggle="modal" data-target="#addBookmarkModal">
            <svg class="add-bookmark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
        </div>
      </div>`);
  }

  if(!getItem("firstTime") || getItem("firstTime") == false){
    $('#showStartVideo').modal({"show":true});
    setItem("firstTime", true);
  }

  if(!getItem("updateShow") || getItem("updateShow") != 1){
    $('#showUpdatesVideo').modal({"show":true});
    setItem("updateShow", 1);
  }
}

$('.bookmarks-container-div').on('click', '.bookmark-item-delete', function(event) {
  let buttonId = event.target.id;
  let index = buttonId.split('-')[1];
  let bookmarks = JSON.parse(getItem("bookmarks"));
  bookmarks.splice(index, 1);
  setItem("bookmarks", JSON.stringify(bookmarks));
  location.reload();
});

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  min = checkTime(min);
  sec = checkTime(sec);
  $("#clock").text(hr + " : " + min + " : " + sec);
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

$("#clock_selector").on('click', function() {
  if( $(this).is(':checked') ){
      setItem("clock", true);
      $("#clock").show();
      startTime();
  } else {
      setItem("clock", false);
      $("#clock").hide();
  }
});

$("#background_send").click(function(){
  if($("#background_url").val().trim() != ""){
      setItem("background", $("#background_url").val());
      $("body").css("background-image","url('"+getItem("background")+"')");
      $("#options-button").css("color", "#fff");
      $("#options-button").css("text-shadow", "0 0 0");
      $("#search-trends").css("color", "#fff");
      $("#search-trends").css("text-shadow", "0 0 0");
      $("#options-reminders").css("color", "#fff");
      $("#options-reminders").css("text-shadow", "0 0 0");
      $("#time_saved").css("color", "#fff");
      $("#time_saved").css("text-shadow", "0 0 0");
      $("#search-text-logo").css("color", "#fff");
      $("#search-text-logo").css("text-shadow", "0 0 0");
      $("#clock").css("color", "#fff");
      $("#clock").css("text-shadow", "0 0 0");
      $("#background_url").val(getItem("background"));
  }
});

$("#default_background").click(function(){
  setItem("background", false);
  $("body").css("background-image","url('./static/images/bg-animate.svg')");
  location.reload();
});

setSettings();

$("#searcher_default").keyup(function(e){
  if(e.which != 40){
    let text = $("#searcher_default").val();
    $.get("https://ultratime.es/api/searchout/autocomplete.php?q="+text.toLowerCase(), function(data){
        $(".autocomplete-searchers-settings").empty();
        let length = data.length;
        if(length != 0){
        data = JSON.parse(data);
        for(let item = 0; item <= 4; item++){
            let name = data[item].charAt(0).toUpperCase() + data[item].slice(1);
            if(item == 0) $(".autocomplete-searchers-settings").append("<li class='searcher-option-settings'><a onClick='selectSearcherSettings(this)' class='active'>"+name+"</a></li>");
            else $(".autocomplete-searchers-settings").append("<li class='searcher-option-settings'><a onClick='selectSearcherSettings(this)'>"+name+"</a></li>");
        }
        }
    });
  }
});

$("#searcher_set").click(function(){
  if($("#searcher_default-input").val().trim() != ""){
      setItem("searcher", $("#searcher_default-input").val().toLowerCase());
      location.reload();
  }
});

$("#searcher_default").click(function(){
  setItem("searcher", false);
  location.reload();
});












//CHAT

var i = 0;
var stopButton = false;
$(".chat-container").hide();
$(".chat-stop").hide();

$("#chat-send").click(function(){
    sendChatMessage();
}); 

function sendChatMessage(){
    let text = $("#chat-text").val();
    if(text.trim().length > 0){
        $("#chat-text").val("");
        let complexity = $("#chat-range").val();

        $(".chat-text").append("<div class='user-message'><p>"+text+"</p></div>");
        $('.chat-text').scrollTop( $('.chat-text').prop('scrollHeight') );

        $.get("https://ultratime.es/api/searchout/chat.php?q="+text+"&c="+complexity, function(data) {
            data = JSON.parse(data);
            let id = Date.now();
            $(".chat-text").append("<div class='searchout-message'><p id='"+id+"'></p></div>");
            i = 0;
            $("#chat-send").attr("disabled", true);
            if(!data["query"] || data["query"]["pages"][0]["missing"] || data["query"]["pages"][0]["invalid"]){
                writeSlowText("Lo siento, pero no he entendido lo que has dicho. Recuerda que solo puedo entender un término o una oración simple.", id);
            }else{
                writeSlowText(data["query"]["pages"][0]["extract"], id);
            }

        });
    }
}

$(".chat-stop").click(function(){
    stopButton = true;
});

function writeSlowText(data, id) {
    const $chatText = $('.chat-text');
    const $chatStop = $('.chat-stop');
    let i = 0;
    let userScrolled = false;
  
    $chatText.scrollTop($chatText.prop('scrollHeight'));
    $chatStop.show();
    $('#chat-send').attr('disabled', true);
  
    $chatText.on('scroll', function() {
      userScrolled = $chatText.scrollTop() < ($chatText.prop('scrollHeight') - $chatText.innerHeight());
    });
  
    function write() {
      if (stopButton) {
        stopButton = false;
        $chatStop.hide();
        $('#chat-send').attr('disabled', false);
      } else {
        if (i < data.length) {
          document.getElementById(id).innerHTML += data.charAt(i);
          i++;
          if (!userScrolled) {
            $chatText.scrollTop($chatText.prop('scrollHeight'));
          }
          setTimeout(write, 25);
        } else {
          $('#chat-send').attr('disabled', false);
          $chatStop.hide();
          $chatText.off('scroll');
        }
      }
    }
    write();
  }
  

$(document).keyup(function(event) {
    if (event.which === 13 && $("#chat-text").val().trim().length > 0 && !$("#chat-send").prop("disabled")) {
        sendChatMessage();
    }
});

$(".open-chat-button").click(function(){
    $(".open-chat-div").slideUp();
    $(".chat-container").slideDown();
});

$(".chat-close").click(function(){
    $(".chat-container").slideUp();
    $(".open-chat-div").slideDown();
});



//REMINDERS

$("#options-reminders").click(function(){
    let tabContainer = $(".tab-container-reminders");
    if (tabContainer.css('right') === '0px') {
      tabContainer.animate({right: "-100%"});
      return;
    }
    
    $(".close-button-reminders").click(function() {
      tabContainer.animate({right: "-100%"});
    });
  
    $("body").append(tabContainer);
  
    tabContainer.animate({right: "0"});

    $(document).click(function(event) {
      if ($(event.target).hasClass("options-reminders")) {
        return;
      }
  
      if (!$(event.target).closest(".tab-container-reminders").length) {
        tabContainer.animate({right: "-100%"});
        console.log("hola");
      }
    });
});

let actualDate = new Date().toISOString().split("T")[0];
$(".add-reminder-date").attr("min", actualDate);
$(".add-reminder-date").attr("value", actualDate);

$(".button-add-reminder-modal").click(function(){
  let title = $(".add-reminder-title").val();
  let date = $(".add-reminder-date").val();
  if (title.trim() === "") title = "Nuevo recordatorio";
  date = date.split("-");
  finalItem = [title, date, false];
  let ls_reminder = localStorage.getItem("reminders");

  if(ls_reminder != null){
    ls_reminder = JSON.parse(ls_reminder);
    ls_reminder.push(finalItem);
    localStorage.setItem("reminders", JSON.stringify(ls_reminder));
    window.location.reload();
  }else{
    ls_reminder = [];
    ls_reminder.push(finalItem);
    localStorage.setItem("reminders", JSON.stringify(ls_reminder));
    window.location.reload();
  }
});

$(document).on("click", ".select-reminder-complete", function(event) {
  event.stopPropagation();

  var reminderCard = $(this).closest(".reminder-card");
  var index = reminderCard.index();
  var items = JSON.parse(localStorage.getItem("reminders"));
  items.splice(index, 1);
  localStorage.setItem("reminders", JSON.stringify(items));

  reminderCard.animate({
    opacity: 0, // Reducir gradualmente la opacidad a cero
    marginTop: "-20px" // Mover la card hacia arriba
  }, 500, function() {
    reminderCard.remove();
  });
});


function caducityReminder() {
  let items = JSON.parse(localStorage.getItem("reminders"));
  let warning = 0;
  if(items != null){
    for (var i = 0; i < items.length; i++) {
      let selectedDate = new Date(items[i][1]);
      let actualDate = new Date();
      let msDifference = selectedDate.getTime() - actualDate.getTime();
      let daysLeft = Math.ceil(msDifference / (1000 * 60 * 60 * 24));    

      if (daysLeft < 2 && daysLeft > -1) {
        warning = warning+1;
      }
    }
  }
  if(getItem("remindersNew") != warning && localStorage.getItem("reminders") != null){
    setItem("remindersNew", warning);
    if(warning !== 0){
      $(".toast-alerts").css("display","block");
      $(".toast-text-reminders").append(`Hey, tienes <strong>${warning}</strong> recordatorios a punto de llegar a su fecha límite.`);
      $(".toast").css("display","block");
      $(".toast").css("opacity","1");
    }
  }else{
    $(".toast-alerts").css("display","none");
  }
}

caducityReminder();

$(".btn-close-reminder").click(function(){
  $(".toast-reminders").fadeOut(500, function(){
    $(this).remove();
  });
});


//DATA Y CIFRADO

function getDataEncrypted(){
  let data = localStorage;
  data = btoa(JSON.stringify(data));
  $("#data_string").val(data);
}

getDataEncrypted();

$(".copy-data-button").click(function() {
  navigator.clipboard.writeText($("#data_string").val());
});

$(".options-menu .copy-data-button").on('click', function(e) {
  e.stopPropagation();
});

$("#data_send").click(function() {
  let data = $("#data_string").val();
  if(data.trim() !== "" || data != null){
    data = JSON.parse(atob(data));
    localStorage.clear();
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        let value = data[key];
        localStorage.setItem(key, value);
      }
    }
    window.location.reload();
  }
});

$("#data_delete").click(function() {
  localStorage.clear();
  window.location.reload();
});

$('#options-button').click(function() {
  $(this).next('.options-menu').slideToggle(500);
});

$(document).on('click', function(event) {
  if (!$('.options-menu').is(event.target) && $('.options-menu').has(event.target).length === 0 && $('.options-menu').is(':visible')) {
    $('.options-menu').slideToggle(500);
  }
  if (!$('.trends-menu').is(event.target) && $('.options-menu').has(event.target).length === 0 && $('.options-menu').is(':visible')) {
    $('.trends-menu').slideToggle(500);
  }
});

//TRENDS

var trendsPanel = $('.tab-container-trends');

function openTrendsPanel() {
  trendsPanel.addClass('open');
}

function closeTrendsPanel() {
  trendsPanel.removeClass('open');
}

$('#search-trends').click(function(event) {
  event.stopPropagation();
  openTrendsPanel();
});

$(document).click(function(event) {
  if (!$(event.target).closest(".tab-container-trends").length) {
    closeTrendsPanel();
  }
});