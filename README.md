
# pt_jssdk
葡萄纬度SDK

注. 使用sdk，需要在url上加上参数inapp=1
-------------------

Web端使用方式：
================

# Installation
    在页面中引入pt_jssdk_v1.0.2.js
    
  <!--or<br>
    
    npm install pt_jssdk-->

# example
    pt_jssdk.openWebView({
      url:'...',
      title:'...'
    })

# API
## viewPics
    预览图片
<table>
  <tbody>
    <tr>
      <td>
       参数名称
      </td>
      <td>
       类型
      </td>
      <td>
       说明
      </td>
    </tr>
    <tr><td>title</td><td>string</td><td>每张图片的title</td></tr>
    <tr><td>picList</td><td>array</td><td>
      图片列表<br>
      注：>item<br>
         >> arry中的每个图片项，类型为object<br>
         >>> url ,类型为string<br>
         >>> text, 类型为string<br>
         例: [<br>
               {<br>
                url:'http://xxxxxxxxxxx/example.jpg',<br>
                text:'test title'<br>
               }<br>
             ]
    </td></tr>
    <tr><td>clickIndex</td><td>number</td><td>当前点击浏览的图片的索引,默认为0</td></tr>
  </tbody>
</table>

## openWebView
    打开一个webview
<table>
  <tbody>
    <tr>
      <td>
       参数名称
      </td>
      <td>
       类型
      </td>
      <td>
       说明
      </td>
    </tr>
    <tr><td>title</td><td>string</td><td>页面的title</td></tr>
    <tr><td>url</td><td>string</td><td>打开页面的url地址</td></tr>
    <tr><td>id</td><td>string</td><td>文章id(非必须)</td></tr>
  </tbody>
</table>

## pageSetting
    设置原页面生标题和分享第三方的配置数据等
<table>
  <tbody>
    <tr>
      <td>
       参数名称
      </td>
      <td>
       类型
      </td>
      <td>
       说明
      </td>
    </tr>
    <tr><td>title</td><td>string</td><td>页面的title</td></tr>
    <tr><td>pic</td><td>string</td><td>分享出去的icon图片</td></tr>
    <tr><td>url</td><td>string</td><td>打开页面的url地址</td></tr>
    <tr><td>id</td><td>string</td><td>文章id(非必须)</td></tr>
  </tbody>
</table>

# webViewBack
    webview返回打开他的APP页 (用于整页都是web，包括顶部头部的web页)
<table>
  <tbody>
    <tr>
      <td>
       参数名称
      </td>
      <td>
       类型
      </td>
      <td>
       说明
      </td>
    </tr>
    <tr><td>name</td><td>string</td><td>返回到指定的原生view的name (不传，则返回默认的前一个打开的view)</td></tr>
    <tr><td>url</td><td>string</td><td>打开页面的url地址</td></tr>
    <tr><td>id</td><td>string</td><td>文章id(非必须)</td></tr>
  </tbody>
</table>

# openOriginalArticle
    阅读原文
<table>
  <tbody>
    <tr>
      <td>
       参数名称
      </td>
      <td>
       类型
      </td>
      <td>
       说明
      </td>
    </tr>
    <tr><td>url</td><td>string</td><td>原文地址</td></tr>
    <tr><td>title</td><td>string</td><td>文章的title</td></tr>
    <tr><td>id</td><td>string</td><td>文章id(非必须)</td></tr>
  </tbody>
</table>

# openNativeView
    打开原生view
<table>
  <tbody>
    <tr>
      <td>
       参数名称
      </td>
      <td>
       类型
      </td>
      <td>
       说明
      </td>
    </tr>
    <tr><td>type</td><td>string</td><td>需要打开的view的类型，比如:打开专题还是产品详情</td></tr>
    <tr><td>title</td><td>string</td><td>文章的title</td></tr>
    <tr><td>id</td><td>string</td><td>打开页面需要的id</td></tr>
  </tbody>
</table>

# nativeShare
    调用原生分享功能
<table>
  <tbody>
    <tr>
      <td>
       参数名称
      </td>
      <td>
       类型
      </td>
      <td>
       说明
      </td>
    </tr>
    <tr><td>title</td><td>string</td><td>分享的title</td></tr>
    <tr><td>pic</td><td>string</td><td>分享出去的icon图片</td></tr>
    <tr><td>desc</td><td>string</td><td>分享的简介文字/td></tr>
    <tr><td>url</td><td>string</td><td>分享的页面地址/td></tr>
  </tbody>
</table>

客户端主动与web前端交互的使用方法
---------
    1.前端开发者，通过pt_jssdk.on(type,callback),来订阅一个事件，
      一个参数为自定义的事件名，callback是回调函数，接收一个参数，类型为 object
    2.客户端直接调用pt_dispatch(type,data) 方法，
    type：类型string，跟web前端开发者约定好的的事件名，data为需要传递给前端的数据
