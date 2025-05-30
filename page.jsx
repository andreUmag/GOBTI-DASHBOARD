"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Activity,
  Users,
  Server,
  FileText,
  TrendingUp,
  Clock,
  Database,
  Lock,
  Info,
  Target,
  Calendar,
  BarChart3,
} from "lucide-react"
import ComplianceModule from "./components/compliance-module"
import RiskModule from "./components/risk-module"
import AvailabilityModule from "./components/availability-module"
import RegulatoryModule from "./components/regulatory-module"

export default function GovernanceDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Datos simulados para AgroTec Solutions
  const kpis = {
    users2FA: 78,
    incidentsResolved24h: 92,
    userSatisfaction: 85,
    backupSuccess: 96,
    securityScore: 72,
    complianceLevel: 68,
  }

  const recentAlerts = [
    { id: 1, type: "warning", title: "Backup fallido", description: "Servidor de archivos - 15:30", time: "2h" },
    { id: 2, type: "info", title: "Actualización programada", description: "Sistema ERP - Domingo 02:00", time: "1d" },
    { id: 3, type: "critical", title: "Acceso no autorizado detectado", description: "IP: 192.168.1.45", time: "30m" },
  ]

  // Información detallada para los modales
  const kpiDetails = {
    users2FA: {
      title: "Autenticación de Dos Factores",
      description: "Porcentaje de usuarios que han activado la autenticación de dos factores",
      currentValue: "78%",
      target: "90%",
      totalUsers: 32,
      usersWithout2FA: 7,
      trend: "+5% vs mes anterior",
      recommendations: [
        "Capacitar a usuarios restantes sobre importancia de 2FA",
        "Implementar recordatorios automáticos",
        "Considerar hacer 2FA obligatorio para roles críticos",
      ],
      lastUpdate: "Hoy 08:00",
    },
    incidentsResolved24h: {
      title: "Resolución de Incidentes",
      description: "Porcentaje de incidentes resueltos en menos de 24 horas",
      currentValue: "92%",
      target: "95%",
      totalIncidents: 25,
      resolvedIn24h: 23,
      avgResolutionTime: "8.5 horas",
      trend: "+3% vs mes anterior",
      recommendations: [
        "Automatizar respuestas para incidentes comunes",
        "Mejorar documentación de procedimientos",
        "Implementar escalamiento automático",
      ],
      lastUpdate: "Hoy 16:30",
    },
    userSatisfaction: {
      title: "Satisfacción de Usuarios",
      description: "Nivel de satisfacción con servicios TI basado en encuestas",
      currentValue: "85%",
      target: "90%",
      totalResponses: 28,
      positiveResponses: 24,
      trend: "+2% vs mes anterior",
      topComplaints: [
        "Lentitud en sistema ERP (40%)",
        "Problemas de conectividad (25%)",
        "Falta de capacitación (20%)",
      ],
      recommendations: [
        "Optimizar rendimiento del ERP",
        "Mejorar infraestructura de red",
        "Programa de capacitación continua",
      ],
      lastUpdate: "Ayer 17:00",
    },
    backupSuccess: {
      title: "Éxito de Respaldos",
      description: "Porcentaje de copias de seguridad completadas exitosamente",
      currentValue: "96%",
      target: "99%",
      totalBackups: 50,
      successfulBackups: 48,
      lastBackup: "Hoy 03:00",
      backupSize: "2.3 TB",
      trend: "-1% vs mes anterior",
      recommendations: [
        "Revisar configuración de backup del servidor de archivos",
        "Implementar monitoreo proactivo",
        "Considerar solución de backup en la nube",
      ],
      lastUpdate: "Hoy 03:15",
    },
    securityScore: {
      title: "Puntuación de Seguridad",
      description: "Evaluación general de la postura de seguridad organizacional",
      currentValue: "72%",
      target: "85%",
      criticalIssues: 3,
      highIssues: 5,
      mediumIssues: 8,
      trend: "+8% vs mes anterior",
      mainIssues: [
        "Sistemas sin parches actualizados",
        "Políticas de contraseñas débiles",
        "Falta de segmentación de red",
      ],
      recommendations: [
        "Implementar gestión automatizada de parches",
        "Reforzar políticas de contraseñas",
        "Diseñar arquitectura de red segmentada",
      ],
      lastUpdate: "Ayer 22:00",
    },
    complianceLevel: {
      title: "Nivel de Cumplimiento",
      description: "Cumplimiento general con marcos de gobierno como COBIT 2019",
      currentValue: "68%",
      target: "80%",
      currentLevel: "Nivel 2 - Procesos Gestionados",
      nextLevel: "Nivel 3 - Procesos Establecidos",
      domainsEvaluated: 5,
      trend: "+12% vs evaluación anterior",
      recommendations: [
        "Documentar procesos faltantes",
        "Implementar métricas de proceso",
        "Capacitar personal en COBIT",
      ],
      lastUpdate: "15 Feb 2024",
    },
  }

  const KPIModal = ({ kpiKey, children }) => {
    const details = kpiDetails[kpiKey]

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-6 w-6 p-0">
            <Info className="h-3 w-3" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              {details.title}
            </DialogTitle>
            <DialogDescription>{details.description}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Métricas principales */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Valor Actual</div>
                <div className="text-2xl font-bold">{details.currentValue}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Meta</div>
                <div className="text-2xl font-bold text-green-600">{details.target}</div>
              </div>
            </div>

            {/* Detalles específicos */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {details.totalUsers && (
                <>
                  <div>
                    <span className="font-medium">Total usuarios:</span> {details.totalUsers}
                  </div>
                  <div>
                    <span className="font-medium">Sin 2FA:</span> {details.usersWithout2FA}
                  </div>
                </>
              )}
              {details.totalIncidents && (
                <>
                  <div>
                    <span className="font-medium">Total incidentes:</span> {details.totalIncidents}
                  </div>
                  <div>
                    <span className="font-medium">Resueltos 24h:</span> {details.resolvedIn24h}
                  </div>
                </>
              )}
              {details.totalResponses && (
                <>
                  <div>
                    <span className="font-medium">Respuestas:</span> {details.totalResponses}
                  </div>
                  <div>
                    <span className="font-medium">Positivas:</span> {details.positiveResponses}
                  </div>
                </>
              )}
              {details.totalBackups && (
                <>
                  <div>
                    <span className="font-medium">Total backups:</span> {details.totalBackups}
                  </div>
                  <div>
                    <span className="font-medium">Exitosos:</span> {details.successfulBackups}
                  </div>
                </>
              )}
              {details.criticalIssues !== undefined && (
                <>
                  <div>
                    <span className="font-medium">Issues críticos:</span> {details.criticalIssues}
                  </div>
                  <div>
                    <span className="font-medium">Issues altos:</span> {details.highIssues}
                  </div>
                </>
              )}
              {details.domainsEvaluated && (
                <>
                  <div>
                    <span className="font-medium">Dominios evaluados:</span> {details.domainsEvaluated}
                  </div>
                  <div>
                    <span className="font-medium">Nivel actual:</span> {details.currentLevel}
                  </div>
                </>
              )}
            </div>

            {/* Tendencia */}
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Tendencia:</span>
              <span className="text-sm text-green-600">{details.trend}</span>
            </div>

            {/* Problemas principales o detalles adicionales */}
            {details.topComplaints && (
              <div>
                <h4 className="font-medium mb-2">Principales quejas:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {details.topComplaints.map((complaint, index) => (
                    <li key={index}>• {complaint}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.mainIssues && (
              <div>
                <h4 className="font-medium mb-2">Principales problemas:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {details.mainIssues.map((issue, index) => (
                    <li key={index}>• {issue}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recomendaciones */}
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Recomendaciones:
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {details.recommendations.map((rec, index) => (
                  <li key={index}>• {rec}</li>
                ))}
              </ul>
            </div>

            {/* Última actualización */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
              <Calendar className="h-3 w-3" />
              Última actualización: {details.lastUpdate}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Panel de Gobierno TI</h1>
              <p className="text-gray-600 mt-1">AgroTec Solutions S.A.S - Monitoreo de Indicadores</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <Activity className="w-4 h-4 mr-1" />
                Sistema Activo
              </Badge>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Resumen
            </TabsTrigger>
            <TabsTrigger value="compliance" className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Cumplimiento
            </TabsTrigger>
            <TabsTrigger value="risks" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Riesgos
            </TabsTrigger>
            <TabsTrigger value="availability" className="flex items-center gap-2">
              <Server className="w-4 h-4" />
              Disponibilidad
            </TabsTrigger>
            <TabsTrigger value="regulatory" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Normativo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* KPIs Principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="relative">
                <KPIModal kpiKey="users2FA" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Usuarios con 2FA</CardTitle>
                  <Shield className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.users2FA}%</div>
                  <Progress value={kpis.users2FA} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">Meta: 90% - Faltan 4 usuarios</p>
                </CardContent>
              </Card>

              <Card className="relative">
                <KPIModal kpiKey="incidentsResolved24h" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Incidentes {"< 24h"}</CardTitle>
                  <Clock className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.incidentsResolved24h}%</div>
                  <Progress value={kpis.incidentsResolved24h} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">23 de 25 incidentes resueltos</p>
                </CardContent>
              </Card>

              <Card className="relative">
                <KPIModal kpiKey="userSatisfaction" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Satisfacción Usuarios</CardTitle>
                  <Users className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.userSatisfaction}%</div>
                  <Progress value={kpis.userSatisfaction} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">Basado en 28 respuestas</p>
                </CardContent>
              </Card>

              <Card className="relative">
                <KPIModal kpiKey="backupSuccess" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Backups Exitosos</CardTitle>
                  <Database className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.backupSuccess}%</div>
                  <Progress value={kpis.backupSuccess} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">Última copia: Hoy 03:00</p>
                </CardContent>
              </Card>

              <Card className="relative">
                <KPIModal kpiKey="securityScore" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Puntuación Seguridad</CardTitle>
                  <Lock className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.securityScore}%</div>
                  <Progress value={kpis.securityScore} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">Requiere atención urgente</p>
                </CardContent>
              </Card>

              <Card className="relative">
                <KPIModal kpiKey="complianceLevel" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Nivel Cumplimiento</CardTitle>
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.complianceLevel}%</div>
                  <Progress value={kpis.complianceLevel} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">COBIT 2019 - Nivel 2</p>
                </CardContent>
              </Card>
            </div>

            {/* Alertas Recientes */}
            <Card>
              <CardHeader>
                <CardTitle>Alertas Recientes</CardTitle>
                <CardDescription>Eventos importantes de las últimas 24 horas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlerts.map((alert) => (
                  <Alert
                    key={alert.id}
                    className={
                      alert.type === "critical"
                        ? "border-red-200 bg-red-50"
                        : alert.type === "warning"
                          ? "border-yellow-200 bg-yellow-50"
                          : "border-blue-200 bg-blue-50"
                    }
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="flex items-center justify-between">
                      {alert.title}
                      <Badge variant="outline" className="text-xs">
                        hace {alert.time}
                      </Badge>
                    </AlertTitle>
                    <AlertDescription>{alert.description}</AlertDescription>
                  </Alert>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance">
            <ComplianceModule />
          </TabsContent>

          <TabsContent value="risks">
            <RiskModule />
          </TabsContent>

          <TabsContent value="availability">
            <AvailabilityModule />
          </TabsContent>

          <TabsContent value="regulatory">
            <RegulatoryModule />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
