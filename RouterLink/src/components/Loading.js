import React from 'react'
import loading from './loading.gif'


//burada state 'ti kullanmayacağımız için function component oluşturduk
//burada img src kaynagı bir png gif jpeg dosyaları olabilir bunları yormlayabilmek için
//file-loader'a ihtiyaç var
const Loading = () => {
  return (
    <div>
      {/* ana dizin altında loading resminin aranabilmesi için diğer sayfalardanda (/ koyduk) */}
      <img src={`/${loading}`} alt="" style={{width:"200px",display:"block",margin:"auto"}}/>
    </div>
  )
}

export default Loading
