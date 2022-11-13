const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;



$('#button').on('click', function () {
  pingFunc();
});



const pingFunc = async () => {
  const response = await window.versions.ping();
  console.log(response);
};


