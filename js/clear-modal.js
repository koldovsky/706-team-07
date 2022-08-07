function clearModal(){
    const myModalEl = document.getElementById('bookTableModal')
    myModalEl.addEventListener('hidden.bs.modal', event => {
    $(".form-control").html("");
    }
)};
