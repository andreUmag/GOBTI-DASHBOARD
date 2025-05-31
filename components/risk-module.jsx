"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertTriangle, Shield, Server, Users, Database, Wifi, Info, Target, Calendar } from "lucide-react"

export default function RiskModule() {
  const riskMatrix = [
    {
      id: 1,
      asset: "Servidor local",
      threat: "Malware/Ransomware",
      impact: "Alto",
      probability: "Alta",
      risk: "Crítico",
      treatment: "Migrar a nube + antivirus empresarial",
      status: "En Progreso",
      progress: 65,
      description: "Servidor físico local vulnerable a ataques de malware y ransomware",
      currentControls: ["Antivirus básico", "Firewall perimetral"],
      plannedControls: ["Migración a nube", "EDR empresarial", "Backup inmutable"],
      timeline: "Q2 2024",
      budget: "$150,000",
      owner: "Infraestructura TI",
    },
    {
      id: 2,
      asset: "Archivos Excel en PCs",
      threat: "Pérdida/Corrupción",
      impact: "Medio",
      probability: "Alta",
      risk: "Alto",
      treatment: "Google Workspace + backups",
      status: "Implementado",
      progress: 95,
      description: "Archivos críticos almacenados localmente sin respaldo centralizado",
      currentControls: ["Backup manual", "Versiones locales"],
      plannedControls: ["Google Workspace", "Sincronización automática", "Control de versiones"],
      timeline: "Completado",
      budget: "$30,600/año",
      owner: "Administración",
    },
    {
      id: 3,
      asset: "Conexión a internet",
      threat: "Saturación/Caída",
      impact: "Alto",
      probability: "Media",
      risk: "Alto",
      treatment: "Proveedor con SLA",
      status: "Pendiente",
      progress: 20,
      description: "Dependencia de un solo proveedor de internet sin redundancia",
      currentControls: ["Proveedor básico", "Monitoreo manual"],
      plannedControls: ["Proveedor empresarial", "SLA 99.9%", "Enlace de respaldo"],
      timeline: "Q3 2024",
      budget: "$80,400/año",
      owner: "Infraestructura TI",
    },
    {
      id: 4,
      asset: "Cuentas compartidas",
      threat: "Suplantación/Fuga info",
      impact: "Alto",
      probability: "Alta",
      risk: "Crítico",
      treatment: "Cuentas individuales + 2FA",
      status: "En Progreso",
      progress: 78,
      description: "Uso de cuentas compartidas para acceso a sistemas críticos",
      currentControls: ["Contraseñas compartidas", "Acceso básico"],
      plannedControls: ["Cuentas individuales", "2FA obligatorio", "Gestión de identidades"],
      timeline: "Q1 2024",
      budget: "$20,400/año",
      owner: "Seguridad TI",
    },
    {
      id: 5,
      asset: "Equipos obsoletos",
      threat: "Fallas de hardware",
      impact: "Medio",
      probability: "Media",
      risk: "Medio",
      treatment: "Plan de renovación",
      status: "Planificado",
      progress: 10,
      description: "Equipos con más de 5 años sin garantía ni soporte",
      currentControls: ["Mantenimiento reactivo", "Repuestos limitados"],
      plannedControls: ["Plan de renovación", "Garantía extendida", "Inventario actualizado"],
      timeline: "Q4 2024",
      budget: "$2,500.000",
      owner: "Infraestructura TI",
    },
  ]

  const riskCategories = [
    { name: "Seguridad de la Información", count: 8, critical: 2, high: 3, medium: 3 },
    { name: "Infraestructura TI", count: 5, critical: 1, high: 2, medium: 2 },
    { name: "Gestión de Datos", count: 4, critical: 1, high: 1, medium: 2 },
    { name: "Recursos Humanos TI", count: 3, critical: 0, high: 1, medium: 2 },
    { name: "Cumplimiento Normativo", count: 2, critical: 0, high: 0, medium: 2 },
  ]

  const getRiskColor = (risk) => {
    switch (risk) {
      case "Crítico":
        return "bg-red-100 text-red-800 border-red-200"
      case "Alto":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Medio":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Bajo":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Implementado":
        return "bg-green-100 text-green-800"
      case "En Progreso":
        return "bg-blue-100 text-blue-800"
      case "Pendiente":
        return "bg-red-100 text-red-800"
      case "Planificado":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getAssetIcon = (asset) => {
    if (asset.includes("Servidor")) return <Server className="w-5 h-5" />
    if (asset.includes("Archivos") || asset.includes("Excel")) return <Database className="w-5 h-5" />
    if (asset.includes("Conexión") || asset.includes("internet")) return <Wifi className="w-5 h-5" />
    if (asset.includes("Cuentas")) return <Users className="w-5 h-5" />
    return <Shield className="w-5 h-5" />
  }

  const RiskModal = ({ risk }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Info className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getAssetIcon(risk.asset)}
            {risk.asset} - {risk.threat}
          </DialogTitle>
          <DialogDescription>{risk.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Nivel de Riesgo</div>
              <Badge className={getRiskColor(risk.risk)}>{risk.risk}</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Impacto</div>
              <div className="font-medium">{risk.impact}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Probabilidad</div>
              <div className="font-medium">{risk.probability}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Responsable:</span> {risk.owner}
            </div>
            <div>
              <span className="font-medium">Timeline:</span> {risk.timeline}
            </div>
            <div>
              <span className="font-medium">Presupuesto:</span> {risk.budget}
            </div>
            <div>
              <span className="font-medium">Estado:</span>
              <Badge className={`ml-2 ${getStatusColor(risk.status)}`}>{risk.status}</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Controles Actuales:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {risk.currentControls.map((control, index) => (
                <li key={index}>• {control}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Controles Planificados:
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {risk.plannedControls.map((control, index) => (
                <li key={index}>• {control}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Progreso del Tratamiento:</h4>
            <div className="flex items-center space-x-2">
              <Progress value={risk.progress} className="flex-1" />
              <span className="text-sm font-medium">{risk.progress}%</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
            <Calendar className="h-3 w-3" />
            Última actualización: Hoy
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="space-y-6">
      {/* Resumen de Riesgos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Riesgos Críticos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">4</div>
            <p className="text-xs text-muted-foreground">Requieren atención inmediata</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Riesgos Altos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">7</div>
            <p className="text-xs text-muted-foreground">Monitoreo continuo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tratamientos Activos</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">15</div>
            <p className="text-xs text-muted-foreground">Planes de mitigación</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progreso General</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">58%</div>
            <Progress value={58} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Matriz de Riesgos Principal */}
      <Card>
        <CardHeader>
          <CardTitle>Matriz de Riesgos TI - AgroTec Solutions</CardTitle>
          <CardDescription>Riesgos identificados según metodología ISO/IEC 27005</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskMatrix.map((risk) => (
              <div key={risk.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {getAssetIcon(risk.asset)}
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{risk.asset}</h4>
                        <RiskModal risk={risk} />
                      </div>
                      <p className="text-sm text-muted-foreground">{risk.threat}</p>
                    </div>
                  </div>
                  <Badge className={getRiskColor(risk.risk)}>{risk.risk}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Impacto:</span> {risk.impact}
                  </div>
                  <div>
                    <span className="font-medium">Probabilidad:</span> {risk.probability}
                  </div>
                  <div>
                    <Badge className={getStatusColor(risk.status)}>{risk.status}</Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Tratamiento: {risk.treatment}</p>
                  <div className="flex items-center space-x-2">
                    <Progress value={risk.progress} className="flex-1" />
                    <span className="text-sm text-muted-foreground">{risk.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categorías de Riesgo */}
      <Card>
        <CardHeader>
          <CardTitle>Riesgos por Categoría</CardTitle>
          <CardDescription>Distribución de riesgos por área de negocio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">Total: {category.count} riesgos identificados</p>
                </div>
                <div className="flex space-x-2">
                  {category.critical > 0 && (
                    <Badge className="bg-red-100 text-red-800">{category.critical} Críticos</Badge>
                  )}
                  {category.high > 0 && <Badge className="bg-orange-100 text-orange-800">{category.high} Altos</Badge>}
                  {category.medium > 0 && (
                    <Badge className="bg-yellow-100 text-yellow-800">{category.medium} Medios</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
