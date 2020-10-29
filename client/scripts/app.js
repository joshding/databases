var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


    // Poll for new messages every 3 sec
    setInterval(App.fetch, 3000);
  },

  fetch: function (callback = () => {}) {
    console.log('getting data');
    Parse.readAll((data) => {
      console.log('in parse.readall: ', data);

      // Don't bother to update if we have no messages
      if (!data[0].text || !data[0].text.length) {
        callback();
        return;
      }
      Rooms.update(data[0].roomsId, RoomsView.render);
      Messages.update(data[0].text, MessagesView.render);

      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
