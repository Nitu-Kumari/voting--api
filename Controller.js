

const voting=[
    {
        "name":"nitu",
        "age":"21"
    }
];
class Controller{
    static getAllVoting(req,res){
        res.json(voting);
    }
}
module.exports=Controller;