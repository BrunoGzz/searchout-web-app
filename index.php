<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Nueva Pestaña</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="/static/style/style.css" />
    <link rel="stylesheet" href="/static/style/bootstrap.min.css">
  </head>
  <body>
    <div class="main-container">
      <div class="d-flex flex-row align-items-center p-1 mb-3 container">
        <h4 class="my-0 mr-auto font-weight-normal poppins"><span>Search </span><span style="color: #007bff">Out</span></h4>
        <h4 id="clock" class="my-0 me-auto"></h4>
        <nav class="my-0">
        <div>
          <a id="time_saved" class="icon-button pl-2 h2 bi-list" data-toggle="tooltip" data-placement="bottom" data-html="true" title="">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
          </a>
          <i class="bi bi-list pl-2 h2 icon-button options-reminders" id="options-reminders">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-calendar-event options-reminders" viewBox="0 0 16 16">
              <path class="options-reminders" d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
              <path class="options-reminders" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
          </i>
          <i class="bi bi-list p-2 h2 icon-button" data-toggle="dropdown" id="options-button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </i>
          <div class="dropdown-menu dropdown-menu-right">
            <h6 class="dropdown-header">Theme</h6>
            <div class="pl-3">
              <button class="btn btn-dark text-light ml-2" id="themeSelector" style="border-radius:10px;">Change</button>
            </div>
            <div class="dropdown-divider"></div>
            <h6 class="dropdown-header">Reloj</h6>
            <div class="pl-4">
              <input type="checkbox" id="clock_selector" class="selector-settings">
              <label for="clock_selector" class="text-settings mb-0">Mostrar hora</label>
            </div>
            <div class="dropdown-divider"></div>
            <h6 class="dropdown-header">Fondo</h6>
            <div class="px-4">
              <input type="input" id="background_url" placeholder="URL de la imagen" class="mr-5 form-control input-settings">
              <div class="mt-2">
                <input type="button" id="background_send" class="url_button" value="Cambiar">
                <input type="button" id="default_background" class="url_button" value="Por defecto">
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <h6 class="dropdown-header">Buscador
            <a tabindex="0" class="dropdown-help-item" data-toggle="tooltip" data-placement="left" title="Escribe exactamente el nombre de la web.">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg>
            </a>
            </h6>
            <div class="px-4">
              <input type="input" id="searcher_default-input" placeholder="Nombre de la web" class="mr-5 form-control input-settings" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" aria-label="Buscador" title="Buscador" aria-autocomplete="both" aria-haspopup="false" maxlength="2048" autofocus="">
              <div class="mt-2">
                <input type="button" id="searcher_set" class="url_button" value="Cambiar">
                <input type="button" id="searcher_default" class="url_button" value="Eliminar">
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <h6 class="dropdown-header">Más información</h6>
            <div class="px-4">
              <a href="https://searchout.es/legal">Aviso Legal</a>
              <span> · </span>
              <a href="https://forms.office.com/r/KvvD4Y5s4H">Añadir buscador</a>
            </div>
          </div>
        </div>
        </nav>
      </div>
      <div class="main-content">
        <div class="searchform-container">
            <div class="form" id="searchform">
                <input id="searcherbox" type="text" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" aria-label="Buscador" title="Buscador" aria-autocomplete="both" aria-haspopup="false" maxlength="2048" autofocus="" placeholder="Buscador">
                <input id="searchbox" type="text" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" aria-label="Buscar" title="Buscar" aria-autocomplete="both" aria-haspopup="false" maxlength="2048" autofocus="" placeholder="¿Qué te apetece buscar?">
                <button id="submit-button" title="Buscar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
            </div>
        </div>
        <div class="autocomplete-sections">
            <div class="autocomplete-searchers"></div> 
        </div>
      </div>
      <div class="bookmarks-container">
        <div class="row justify-content-center bookmarks-container-div">
      </div>
      </div>      
      <div class="chat-container">
        <div class="chat-header">
            <h5 class="chat-title text-light">SearchOut Chat</h5>
            <button class="chat-stop bi bi-stop-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
              </svg>
          </button>
            <button class="chat-close bi bi-dash text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
        </div>
        <div class="chat-text">
            <div class="searchout-message">
                <p>¡Hola, soy SearchOut! Dime alguna palabra o término y yo te lo explicaré.</p>
            </div>
        </div>
        <div class="chat-complexity">
          <h6 class="d-inline m-0 p-0 chat-info">Información: </h6>
          <input
          type="range"
          name="complexity"
          min="1"
          max="3"
          step="1"
          value="1" id="chat-range" class="d-inline chat-range"/>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control chat-input-text" id="chat-text" placeholder="Escribe alguna palabra..." aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-primary chat-input-send" id="chat-send" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg></button>
            </div>
        </div>
      </div>
      <div class="open-chat-div">
          <button class="open-chat-button"><i class="bi bi-chat-square-dots-fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat-square-dots-fill" viewBox="0 0 16 16" style="vertical-align: -.125em;">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
          </i></button>
      </div>
    </div>
    <div class="tab-container-reminders">
      <div class="tab-header-reminders">
        <h1 class="tab-title-reminders">Recordatorios</h1>
        <button class="close-button-reminders">&#10005;</button>
      </div>
      <div class="tab-content-reminders">
      </div>
      <button class="add-button-reminders btn btn-primary" data-toggle="modal" data-target="#addReminderModal">&#43;</button>
    </div>
    <div class="modal fade" id="addBookmarkModal" tabindex="-1" aria-labelledby="addBookmarkModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Añadir Marcador</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h6>URL del sitio web:</h6>
            <input type="text" required class="form-control mb-2 add-bookmark-url" placeholder="Introduce la URL del sitio web.">
            <button type="button" class="btn btn-primary button-add-bookmark-modal">Añadir al inicio</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="addReminderModal" tabindex="-1" aria-labelledby="addReminderModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Añadir Recordatorio</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h6>Título del recordatorio:</h6>
            <input type="text" class="form-control mb-2 add-reminder-title" placeholder="Introduce un título.">
            <h6>Fecha límite:</h6>
            <input type="date" class="form-control mb-2 add-reminder-date">
            <button type="button" class="btn btn-primary button-add-reminder-modal">Añadir al inicio</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="showStartVideo" tabindex="-1" aria-labelledby="showStartVideo" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Bienvenido a SearchOut.</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <iframe width="466" height="256" src="https://www.youtube.com/embed/hhbIrjNzjjU" title="Descubre SearchOut. Busca rápido y seguro con SearchOut." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <!--div class="modal fade" id="showUpdatesVideo" tabindex="-1" aria-labelledby="showUpdatesVideo" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="showUpdatesVideo">Nueva actualización: Recordatorios.</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img width="466" height="256" src="https://searchout.es/views/pages/src/img/reminders.gif"></img>
          </div>
        </div>
      </div>
    </div-->
    <div class="toast-alerts">
      <div class="toast toast-reminders" role="alert" aria-live="assertive" aria-atomic="true" style="display: block;">
          <div class="toast-header p-2">
              <img src="./static/images/icon.png" class="rounded mr-2" alt="Logo" width="20">
              <strong class="mr-auto">SearchOut</strong>
              <small>Justo Ahora</small>
              <button type="button" class="btn-close btn-close-reminder" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body toast-text-reminders">
          
          </div>
      </div>
    </div>
  </body>
  
  <script src="/static/scripts/popper.min.js"></script>
  <script src="/static/scripts/jquery-3.6.4.js"></script>
  <script src="/static/scripts/bootstrap.min.js"></script>
  <script src="/static/scripts/main.js"></script>
</html>
