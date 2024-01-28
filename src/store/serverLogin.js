import axios from 'axios';
import Swal from 'sweetalert2';
import DataStore from './store.js';
function timerAlert(){
    let timerInterval;
    Swal.fire({
      title: "!מיד תכנס כמנהל.",
      html: "I will close in <b></b> milliseconds.",
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 250);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    }

function showAlert() {
    Swal.fire({
      title: 'אופססס',
      text: 'שם משתמש  או סיסמא שגויים',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
export async function CheckLogin(name, password) {
    try {
        const isValid = await axios.post("http://localhost:8787/login", { name, password });
        if (isValid.status === 200) {
            timerAlert()

            DataStore.setIsLogin(true);
            
        }
    }
    catch (error) {
        if (error.response && error.response.status === 401) {
            // console.log('login failed');
            showAlert()

        } else {
            // console.log(error);
            showAlert()


        }
    }
}