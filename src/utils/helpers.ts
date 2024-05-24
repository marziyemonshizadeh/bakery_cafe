const swal = require("sweetalert");

const showSwal = (
  title: string,
  icon: string,
  buttons: string,
  url: Location | (string & Location) | any
) => {
  swal({ title, icon, buttons }).then(function () {
    window.location = url;
  });
};

export { showSwal };
