package handler

import (
	"fmt"
	"net/http"

	"final-project-engineering-30/backend/user"

	"github.com/gin-gonic/gin"
)

type handlerUser struct {
	service user.Service
}

func NewHandlerSiswa(service user.Service) *handlerUser {
	return &handlerUser{service}
}

// func handler untuk login
func (h *handlerUser) LoginUser(c *gin.Context) {
	// inisiasi input login User
	var input User.InputLogin

	err := c.ShouldBindJSON(&input)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		fmt.Errorf("Error: %v", err)
		c.JSON(http.StatusBadRequest, myErr)
		return
	}

	newSiswa, err := h.service.LoginUser(input)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// fmt.Errorf("Error: %v", err)
		c.JSON(http.StatusBadRequest, myErr)
		return
	}

	data := User.FormatUser(newUser)

	c.JSON(http.StatusOK, data)
}

// func handler untuk resgister
func (h *handlerUser) RegisterUser(c *gin.Context) {
	// inisiasi input register User
	var input User.InputRegister

	err := c.ShouldBindJSON(&input)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		fmt.Errorf("Error: %v", err)
		c.JSON(http.StatusBadRequest, myErr)
		return
	}

	newSiswa, err := h.service.RegisterSiswa(input)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// fmt.Errorf("Error: %v", err)
		c.JSON(http.StatusBadRequest, myErr)
		return
	}

	data := User.FormatUser(newUser)

	c.JSON(http.StatusOK, data)
}
