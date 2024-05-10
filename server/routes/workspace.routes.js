const express = require('express')
const workspaceRouter = express.Router()
const workspaceController = require('../controllers/workspace.controller')
const {
	authMiddleware,
	checkAdminRole
} = require('../middlewares/auth.middleware')

workspaceRouter.post(
	'/create',
	authMiddleware,
	checkAdminRole,
	workspaceController.createWorkspace
)

workspaceRouter.get('/all', workspaceController.getAllWorkspaces)

workspaceRouter.get('/:workspaceId', workspaceController.getWorkspaceById)

workspaceRouter.put(
	'/edit/:workspaceId',
	authMiddleware,
	checkAdminRole,
	workspaceController.updateWorkspaceById
)

workspaceRouter.delete(
	'/delete/:workspaceId',
	authMiddleware,
	checkAdminRole,
	workspaceController.deleteWorkspaceById
)

module.exports = workspaceRouter
