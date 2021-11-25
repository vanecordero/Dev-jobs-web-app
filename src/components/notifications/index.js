import e from './style.module.css'

const danger =()=> {
  return (<>
  
  <div className={e.container}>
    <div className={e.row}>          
      <div className={e.error_notice}>
        <div className={`${e.oaerror} ${e.danger}`}>
          <strong>Error</strong>- You need to remember your username/password. Please try again.
        </div>
      </div>
    </div>
  </div>
  
  </>)
}

const warning =()=> {
  return (<>
  
  <div className={e.container}>
    <div className={e.row}>          
      <div className={e.error_notice}>
        <div className={`${e.oaerror} ${e.warning}`}>
          <strong>Error</strong> - You missed a field, pay attention!
        </div>
      </div>
    </div>
  </div>
  
  </>)
}
const info =()=> {
  return (<>  
  <div className={e.container}>
    <div className={e.row}>          
      <div className={e.error_notice}>
        <div className={`${e.oaerror} ${e.info}`}>
          <strong>Error</strong> - Someone already thought of your dumb username. Choose another.
        </div>
      </div>
    </div>
  </div>
  
  </>)
}

const success =()=> {

  return (<>
  
  <div className={e.container}>
    <div className={e.row}>          
      <div className={e.error_notice}>
        <div className={`${e.oaerror} ${e.success}`}>
          <strong>Finally</strong> - Congrats, you figured out how to login.
        </div>
      </div>
    </div>
  </div>
  
  </>)
}

export default {danger, success, info, warning}

