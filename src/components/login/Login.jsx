import React from 'react'

function Login() {
  return (
    <div className="mx-auto max-w-xs">
    <form>
      <div className='w-full font-bold text-2xl text-center'><p className=''>SIGN IN</p></div>
      <div className="mt-3 form-control w-full mb-2">
        <label className="label">
          <span className="label-text">User Name</span>
        </label>
        <input  name="usename" type="text" placeholder="Input user name" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input name="password" type="password" placeholder="Input password" className="font-normal mt-2 input text-white input-bordered w-full h-8 rounded-md" />
      </div>
      <div className='w-full mt-5 '>
            <button type="submit" className="btn btn-accent w-full">Login</button>
      </div>
      <div className="w-full text-center mt-5"><button className="btn btn-outline w-full">Register</button>
</div>

    </form>
  </div>
  
  )
}

export default Login