// Code generated by go-mir. DO NOT EDIT.
// versions:
// - mir v4.1.0

package v1

import (
	"net/http"

	"github.com/alimy/mir/v4"
	"github.com/gin-gonic/gin"
	"github.com/rocboss/paopao-ce/internal/model/web"
)

type Core interface {
	_default_

	// Chain provide handlers chain for gin
	Chain() gin.HandlersChain

	TweetCollectionStatus(*web.TweetCollectionStatusReq) (*web.TweetCollectionStatusResp, mir.Error)
	TweetStarStatus(*web.TweetStarStatusReq) (*web.TweetStarStatusResp, mir.Error)
	SuggestTags(*web.SuggestTagsReq) (*web.SuggestTagsResp, mir.Error)
	SuggestUsers(*web.SuggestUsersReq) (*web.SuggestUsersResp, mir.Error)
	ChangeAvatar(*web.ChangeAvatarReq) mir.Error
	ChangeNickname(*web.ChangeNicknameReq) mir.Error
	ChangePassword(*web.ChangePasswordReq) mir.Error
	UserPhoneBind(*web.UserPhoneBindReq) mir.Error
	GetStars(*web.GetStarsReq) (*web.GetStarsResp, mir.Error)
	GetCollections(*web.GetCollectionsReq) (*web.GetCollectionsResp, mir.Error)
	SendUserWhisper(*web.SendWhisperReq) mir.Error
	ReadAllMessage(*web.ReadAllMessageReq) mir.Error
	ReadMessage(*web.ReadMessageReq) mir.Error
	GetMessages(*web.GetMessagesReq) (*web.GetMessagesResp, mir.Error)
	GetUserInfo(*web.UserInfoReq) (*web.UserInfoResp, mir.Error)
	SyncSearchIndex(*web.SyncSearchIndexReq) mir.Error

	mustEmbedUnimplementedCoreServant()
}

// RegisterCoreServant register Core servant to gin
func RegisterCoreServant(e *gin.Engine, s Core) {
	router := e.Group("v1")
	// use chain for router
	middlewares := s.Chain()
	router.Use(middlewares...)

	// register routes info to router
	router.Handle("GET", "/post/collection", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.TweetCollectionStatusReq)
		var bv _binding_ = req
		if err := bv.Bind(c); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.TweetCollectionStatus(req)
		s.Render(c, resp, err)
	})
	router.Handle("GET", "/post/star", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.TweetStarStatusReq)
		var bv _binding_ = req
		if err := bv.Bind(c); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.TweetStarStatus(req)
		s.Render(c, resp, err)
	})
	router.Handle("GET", "/suggest/tags", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.SuggestTagsReq)
		var bv _binding_ = req
		if err := bv.Bind(c); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.SuggestTags(req)
		s.Render(c, resp, err)
	})
	router.Handle("GET", "/suggest/users", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.SuggestUsersReq)
		var bv _binding_ = req
		if err := bv.Bind(c); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.SuggestUsers(req)
		s.Render(c, resp, err)
	})
	router.Handle("POST", "/user/avatar", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.ChangeAvatarReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		s.Render(c, nil, s.ChangeAvatar(req))
	})
	router.Handle("POST", "/user/nickname", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.ChangeNicknameReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		s.Render(c, nil, s.ChangeNickname(req))
	})
	router.Handle("POST", "/user/password", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.ChangePasswordReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		s.Render(c, nil, s.ChangePassword(req))
	})
	router.Handle("POST", "/user/phone", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.UserPhoneBindReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		s.Render(c, nil, s.UserPhoneBind(req))
	})
	router.Handle("GET", "/user/stars", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.GetStarsReq)
		var bv _binding_ = req
		if err := bv.Bind(c); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.GetStars(req)
		s.Render(c, resp, err)
	})
	router.Handle("GET", "/user/collections", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.GetCollectionsReq)
		var bv _binding_ = req
		if err := bv.Bind(c); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.GetCollections(req)
		s.Render(c, resp, err)
	})
	router.Handle("POST", "/user/whisper", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.SendWhisperReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		s.Render(c, nil, s.SendUserWhisper(req))
	})
	router.Handle("POST", "/user/message/readall", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.ReadAllMessageReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		s.Render(c, nil, s.ReadAllMessage(req))
	})
	router.Handle("POST", "/user/message/read", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.ReadMessageReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		s.Render(c, nil, s.ReadMessage(req))
	})
	router.Handle("GET", "/user/messages", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.GetMessagesReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.GetMessages(req)
		if err != nil {
			s.Render(c, nil, err)
			return
		}
		var rv _render_ = resp
		rv.Render(c)
	})
	router.Handle("GET", "/user/info", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.UserInfoReq)
		var bv _binding_ = req
		if err := bv.Bind(c); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.GetUserInfo(req)
		s.Render(c, resp, err)
	})
	router.Handle("GET", "/sync/index", func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.SyncSearchIndexReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		s.Render(c, nil, s.SyncSearchIndex(req))
	})
}

// UnimplementedCoreServant can be embedded to have forward compatible implementations.
type UnimplementedCoreServant struct{}

func (UnimplementedCoreServant) Chain() gin.HandlersChain {
	return nil
}

func (UnimplementedCoreServant) TweetCollectionStatus(req *web.TweetCollectionStatusReq) (*web.TweetCollectionStatusResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) TweetStarStatus(req *web.TweetStarStatusReq) (*web.TweetStarStatusResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) SuggestTags(req *web.SuggestTagsReq) (*web.SuggestTagsResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) SuggestUsers(req *web.SuggestUsersReq) (*web.SuggestUsersResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) ChangeAvatar(req *web.ChangeAvatarReq) mir.Error {
	return mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) ChangeNickname(req *web.ChangeNicknameReq) mir.Error {
	return mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) ChangePassword(req *web.ChangePasswordReq) mir.Error {
	return mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) UserPhoneBind(req *web.UserPhoneBindReq) mir.Error {
	return mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) GetStars(req *web.GetStarsReq) (*web.GetStarsResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) GetCollections(req *web.GetCollectionsReq) (*web.GetCollectionsResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) SendUserWhisper(req *web.SendWhisperReq) mir.Error {
	return mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) ReadAllMessage(req *web.ReadAllMessageReq) mir.Error {
	return mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) ReadMessage(req *web.ReadMessageReq) mir.Error {
	return mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) GetMessages(req *web.GetMessagesReq) (*web.GetMessagesResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) GetUserInfo(req *web.UserInfoReq) (*web.UserInfoResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) SyncSearchIndex(req *web.SyncSearchIndexReq) mir.Error {
	return mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedCoreServant) mustEmbedUnimplementedCoreServant() {}
