import{d as R,a as E,_ as V,b as W,c as J}from"./content-e6463fce.js";import{d as U,c as O,r as Y,e as l,f as C,k as a,al as G,w as n,j as u,F as K,u as Q,y as v,bf as i,A as p,x as _,q as c,Y as r,h as q}from"./@vue-a481fc63.js";import{u as X}from"./vuex-44de225f.js";import{u as Z}from"./vue-router-e5a2430e.js";import{U as ee,A as te,B as se}from"./index-7ca83537.js";import{c as oe}from"./copy-to-clipboard-4ef7d3eb.js";import{k as ne,l as ae,n as le,o as ie,r as ue,s as ce,t as re,J as pe,R as _e,q as de}from"./@vicons-f0266f88.js";import{j as h,o as me,M as ve,e as he,P as fe,a as ke,O as ge}from"./naive-ui-eecf2ec3.js";const ye={class:"post-item"},we={class:"nickname-wrap"},be={class:"username-wrap"},Ce={class:"timestamp-mobile"},xe={class:"item-header-extra"},$e=["innerHTML"],Oe=["onClick"],qe=["onClick"],Ee=U({__name:"mobile-post-item",props:{post:{},isOwner:{type:Boolean},addFriendAction:{type:Boolean},addFollowAction:{type:Boolean}},emits:["send-whisper","handle-follow-action","handle-friend-action"],setup(z,{emit:g}){const o=z,y=Z(),x=X(),d=t=>()=>q(h,null,{default:()=>q(t)}),T=O(()=>{let t=[];return o.isOwner||t.push({label:"私信 @"+o.post.user.username,key:"whisper",icon:d(ue)}),!o.isOwner&&o.addFollowAction&&(o.post.user.is_following?t.push({label:"取消关注 @"+o.post.user.username,key:"unfollow",icon:d(ce)}):t.push({label:"关注 @"+o.post.user.username,key:"follow",icon:d(re)})),!o.isOwner&&o.addFriendAction&&(o.post.user.is_friend?t.push({label:"删除好友 @"+o.post.user.username,key:"delete",icon:d(pe)}):t.push({label:"添加朋友 @"+o.post.user.username,key:"requesting",icon:d(_e)})),t.push({label:"复制链接",key:"copyTweetLink",icon:d(de)}),t}),B=async t=>{switch(t){case"copyTweetLink":oe(`${window.location.origin}/#/post?id=${e.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板");break;case"whisper":g("send-whisper",o.post.user);break;case"delete":case"requesting":g("handle-friend-action",o.post);break;case"follow":case"unfollow":g("handle-follow-action",o.post);break}},e=O({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},o.post);return t.contents.map(s=>{(+s.type==1||+s.type==2)&&t.texts.push(s),+s.type==3&&t.imgs.push(s),+s.type==4&&t.videos.push(s),+s.type==6&&t.links.push(s),+s.type==7&&t.attachments.push(s),+s.type==8&&t.charge_attachments.push(s)}),t},set:t=>{o.post.upvote_count=t.upvote_count,o.post.collection_count=t.collection_count}}),P=()=>{te({id:e.value.id}).then(t=>{t.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count>0?e.value.upvote_count-1:0}}).catch(t=>{console.log(t)})},A=()=>{se({id:e.value.id}).then(t=>{t.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count>0?e.value.collection_count-1:0}}).catch(t=>{console.log(t)})},w=t=>{y.push({name:"post",query:{id:t}})},S=(t,s)=>{if(t.target.dataset.detail){const m=t.target.dataset.detail.split(":");if(m.length===2){x.commit("refresh"),m[0]==="tag"?y.push({name:"home",query:{q:m[1],t:"tag"}}):y.push({name:"user",query:{s:m[1]}});return}}w(s)};return(t,s)=>{const m=me,k=Y("router-link"),b=ve,F=he,L=fe,$=E,M=V,j=W,D=J,H=ke,I=ge;return l(),C("div",ye,[a(I,{"content-indented":""},G({avatar:n(()=>[a(m,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[u("span",we,[a(k,{onClick:s[0]||(s[0]=v(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:n(()=>[p(_(e.value.user.nickname),1)]),_:1},8,["to"])]),u("span",be," @"+_(e.value.user.username),1),e.value.is_top?(l(),c(b,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[p(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(l(),c(b,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[p(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(l(),c(b,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[p(" 好友可见 ")]),_:1})):r("",!0),u("div",null,[u("span",Ce,_(i(ee)(e.value.created_on))+" "+_(e.value.ip_loc),1)])]),"header-extra":n(()=>[u("div",xe,[a(L,{placement:"bottom-end",trigger:"click",size:"small",options:T.value,onSelect:B},{default:n(()=>[a(F,{quaternary:"",circle:""},{icon:n(()=>[a(i(h),null,{default:n(()=>[a(i(ne))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:n(()=>[e.value.attachments.length>0?(l(),c($,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(l(),c($,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(l(),c(M,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(l(),c(j,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(l(),c(D,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:n(()=>[a(H,{justify:"space-between"},{default:n(()=>[u("div",{class:"opt-item",onClick:v(P,["stop"])},[a(i(h),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ae))]),_:1}),p(" "+_(e.value.upvote_count),1)],8,Oe),u("div",{class:"opt-item",onClick:s[3]||(s[3]=v(f=>w(e.value.id),["stop"]))},[a(i(h),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(le))]),_:1}),p(" "+_(e.value.comment_count),1)]),u("div",{class:"opt-item",onClick:v(A,["stop"])},[a(i(h),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ie))]),_:1}),p(" "+_(e.value.collection_count),1)],8,qe)]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:n(()=>[u("div",{onClick:s[2]||(s[2]=f=>w(e.value.id))},[(l(!0),C(K,null,Q(e.value.texts,f=>(l(),C("span",{key:f.id,class:"post-text",onClick:s[1]||(s[1]=v(N=>S(N,e.value.id),["stop"])),innerHTML:i(R)(f.content,"查看全文",i(x).state.profile.tweetMobileEllipsisSize)},null,8,$e))),128))])]),key:"0"}:void 0]),1024)])}}});const ze={class:"nickname-wrap"},Te={class:"username-wrap"},Be={class:"item-header-extra"},Pe={class:"timestamp"},Ae=["innerHTML"],Se=["onClick"],Fe=["onClick"],Ve=U({__name:"post-item",props:{post:{},isOwner:{type:Boolean},addFriendAction:{type:Boolean},addFollowAction:{type:Boolean}},emits:["send-whisper","handle-follow-action","handle-friend-action"],setup(z,{emit:g}){const o=z,y=Z(),x=X(),d=t=>()=>q(h,null,{default:()=>q(t)}),T=O(()=>{let t=[];return o.isOwner||t.push({label:"私信 @"+o.post.user.username,key:"whisper",icon:d(ue)}),!o.isOwner&&o.addFollowAction&&(o.post.user.is_following?t.push({label:"取消关注 @"+o.post.user.username,key:"unfollow",icon:d(ce)}):t.push({label:"关注 @"+o.post.user.username,key:"follow",icon:d(re)})),!o.isOwner&&o.addFriendAction&&(o.post.user.is_friend?t.push({label:"删除好友 @"+o.post.user.username,key:"delete",icon:d(pe)}):t.push({label:"添加朋友 @"+o.post.user.username,key:"requesting",icon:d(_e)})),t.push({label:"复制链接",key:"copyTweetLink",icon:d(de)}),t}),B=async t=>{switch(t){case"copyTweetLink":oe(`${window.location.origin}/#/post?id=${e.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板");break;case"whisper":g("send-whisper",o.post.user);break;case"delete":case"requesting":g("handle-friend-action",o.post);break;case"follow":case"unfollow":g("handle-follow-action",o.post);break}},e=O({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},o.post);return t.contents.map(s=>{(+s.type==1||+s.type==2)&&t.texts.push(s),+s.type==3&&t.imgs.push(s),+s.type==4&&t.videos.push(s),+s.type==6&&t.links.push(s),+s.type==7&&t.attachments.push(s),+s.type==8&&t.charge_attachments.push(s)}),t},set:t=>{o.post.upvote_count=t.upvote_count,o.post.collection_count=t.collection_count}}),P=()=>{te({id:e.value.id}).then(t=>{t.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count>0?e.value.upvote_count-1:0}}).catch(t=>{console.log(t)})},A=()=>{se({id:e.value.id}).then(t=>{t.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count>0?e.value.collection_count-1:0}}).catch(t=>{console.log(t)})},w=t=>{y.push({name:"post",query:{id:t}})},S=(t,s)=>{const m=t.target.dataset.detail;if(m&&m!=="post"){const k=m.split(":");if(k.length===2){x.commit("refresh"),k[0]==="tag"?y.push({name:"home",query:{q:k[1],t:"tag"}}):y.push({name:"user",query:{s:k[1]}});return}}w(s)};return(t,s)=>{const m=me,k=Y("router-link"),b=ve,F=he,L=fe,$=E,M=V,j=W,D=J,H=ke,I=ge;return l(),C("div",{class:"post-item",onClick:s[3]||(s[3]=f=>w(e.value.id))},[a(I,{"content-indented":""},G({avatar:n(()=>[a(m,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[u("span",ze,[a(k,{onClick:s[0]||(s[0]=v(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:n(()=>[p(_(e.value.user.nickname),1)]),_:1},8,["to"])]),u("span",Te," @"+_(e.value.user.username),1),e.value.is_top?(l(),c(b,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[p(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(l(),c(b,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[p(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(l(),c(b,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[p(" 好友可见 ")]),_:1})):r("",!0)]),"header-extra":n(()=>[u("div",Be,[u("span",Pe,_(e.value.ip_loc?e.value.ip_loc+" · ":e.value.ip_loc)+" "+_(i(ee)(e.value.created_on)),1),a(L,{placement:"bottom-end",trigger:"hover",size:"small",options:T.value,onSelect:B},{default:n(()=>[a(F,{quaternary:"",circle:""},{icon:n(()=>[a(i(h),null,{default:n(()=>[a(i(ne))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:n(()=>[e.value.attachments.length>0?(l(),c($,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(l(),c($,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(l(),c(M,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(l(),c(j,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(l(),c(D,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:n(()=>[a(H,{justify:"space-between"},{default:n(()=>[u("div",{class:"opt-item hover",onClick:v(P,["stop"])},[a(i(h),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ae))]),_:1}),p(" "+_(e.value.upvote_count),1)],8,Se),u("div",{class:"opt-item hover",onClick:s[2]||(s[2]=v(f=>w(e.value.id),["stop"]))},[a(i(h),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(le))]),_:1}),p(" "+_(e.value.comment_count),1)]),u("div",{class:"opt-item hover",onClick:v(A,["stop"])},[a(i(h),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ie))]),_:1}),p(" "+_(e.value.collection_count),1)],8,Fe)]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:n(()=>[(l(!0),C(K,null,Q(e.value.texts,f=>(l(),C("span",{key:f.id,class:"post-text hover",onClick:s[1]||(s[1]=v(N=>S(N,e.value.id),["stop"])),innerHTML:i(R)(f.content,"查看全文",i(x).state.profile.tweetWebEllipsisSize)},null,8,Ae))),128))]),key:"0"}:void 0]),1024)])}}});export{Ve as _,Ee as a};
