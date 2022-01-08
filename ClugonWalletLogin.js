const connectButton = document.querySelector('.Web3Login');

connectButton.addEventListener('click', () => {
getAccount();
});

async function getAccount() {
const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0];

    $.ajax({
    url: "../_Db/_function.php?function=Web3Login",
    type: "POST",
    data: "&DATA="+account,
		success: function(result){
			$("#Web3Result").html(result);
		}
    });

}
