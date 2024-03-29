import Myinfo from '../Component_Junehwan/Myinfo'
import Profilemodify from '../Component_Junehwan/Profilemodify';
import Nav from '../Componet_Soonkyu/Nav';

export default function Modify ({ isLogin, userInfo, handleLogout }) {
    return (
      <div>
        <Nav isLogin={isLogin}/>
        <div className='first-component'>
          <Myinfo userInfo={userInfo} handleLogout={handleLogout} />
        </div>

        <div className='second-component-profile'>
          <Profilemodify userInfo={userInfo} />
        </div>
      </div>
    )
}