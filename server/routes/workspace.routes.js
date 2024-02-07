const express = require('express')
const workspaceRouter = express.Router()
const workspaceController = require('../controllers/workspace.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

// * Workspace
workspaceRouter.post('/create', workspaceController.createWorkspace)
workspaceRouter.get('/all', workspaceController.getAllWorkspaces)
workspaceRouter.get('/:workspaceId', workspaceController.getWorkspaceById)
workspaceRouter.put(
	'/edit/:workspaceId',
	workspaceController.updateWorkspaceById
)
workspaceRouter.delete(
	'/delete/:workspaceId',
	workspaceController.deleteWorkspaceById
)

module.exports = workspaceRouter
