let SignIn=()=>{
    return (
        <div className="row p-5 m-5">
            <form className="signup col-5mx-auto p-3" style={{backgroundColor:"#d7d9db",borderRadius:'10px'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputusername">Username</label>
                    <input type="text" className="" id="exampleInputusername" placeholder="username" />
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" /><br/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <br/>
                <div>
                    <p>Choose Your gender</p>
                   <input type="radio" id="female" name="gender" value="female" />
                   <label for="female">Female</label><br/><br/>
                   <input type="radio" id="male" name="gender" value="male" />
                   <label for="male">Male</label><br></br>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Put your Image Here  </label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                 <br/>
                 <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}
export default SignIn;
