const express = require('express')
const workspaceRouter = express.Router()
const workspaceController = require('../controllers/workspace.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

workspaceRouter.post(
	'/create',
	authMiddleware,
	isAdminMiddleware,
	workspaceController.createWorkspace
)
workspaceRouter.get('/all', workspaceController.getAllWorkspaces)
workspaceRouter.get('/:workspaceId', workspaceController.getWorkspaceById)
workspaceRouter.put(
	'/edit/:workspaceId',
	authMiddleware,
	isAdminMiddleware,
	workspaceController.updateWorkspaceById
)
workspaceRouter.delete(
	'/delete/:workspaceId',
	authMiddleware,
	isAdminMiddleware,
	workspaceController.deleteWorkspaceById
)

module.exports = workspaceRouter
