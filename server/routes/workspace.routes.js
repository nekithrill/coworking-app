const express = require('express')
const workspaceRouter = express.Router()
const workspaceController = require('../controllers/workspace.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

// * Workspace
workspaceRouter.post('/workspace/create', workspaceController.createWorkspace)
workspaceRouter.get('/workspaces', workspaceController.getAllWorkspaces)
workspaceRouter.get(
	'/workspace/:workspaceId',
	workspaceController.getWorkspaceById
)
workspaceRouter.put(
	'/workspace/:workspaceId',
	workspaceController.updateWorkspaceById
)
workspaceRouter.delete(
	'/workspace/:workspaceId',
	workspaceController.deleteWorkspaceById
)

module.exports = workspaceRouter
