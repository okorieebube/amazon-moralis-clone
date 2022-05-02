import { PageHeader, Button, Input, Badge, Space } from 'antd';
import {ShoppingCartOutlined, MenuOutlined} from "@ant-design/icons";
import { useMoralis } from "react-moralis";
import './Header.css'
import Amazon from '../images/logo.png';
import Usa from '../images/usa.png';
import BookStore from '../images/bookstore.png';
import { Link } from 'react-router-dom';

const {Search}  = Input;

const categories = ["Comics", "Dictionaries", "Novels", "Fantasy", "Horror", "Adventure"];

const Header = () => {
  const { authenticate, account } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
         <>
         <img src={Amazon} className="logo" alt=""/>
         <img src={BookStore} className="logo" alt=""/>
         <Search placeholder='find a product' enterButton className=''></Search>
         <Button className="login" key="1" type="primary" onClick={() => authenticate()}>
          {account?<span>{account.slice(0,5)}...</span> : <span>Connect Wallet</span>}
          </Button>
          
          <Space size={"large"}>
              
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={Usa} alt="region" className="flag"></img>▾
              </Space>
              
            </Space>
         </>
        ]}>
      </PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
      <Space size={"middle"}>
        <Space size={"small"} style={{fontWeight:"bold"}}>
          <MenuOutlined />
          Categories
        </Space>
        {categories.map((e) =>{
          return(
            <Link key={e} to="/categories" state={e} className="categories">
              {e}
            </Link>
          )

        })}
      </Space>
    </div>
    </div>
  )
}

export default Header;